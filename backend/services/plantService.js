const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const recentOrderPlants = async () => {
  try {
    const result = await Plant.findAll({
      include: [
        {
          model: Tag,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          through: {
            attributes: [],
          },
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [Tag, 'order', 'ASC'],
      ],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const viewOrderPlants = async () => {
  try {
    const result = await Plant.findAll({
      include: [
        {
          model: Tag,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          through: {
            attributes: [],
          },
        },
      ],
      order: [
        ['yesterDayViews', 'DESC'],
        [Tag, 'order', 'ASC'],
      ],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const allOrderPlants = async () => {
  try {
    const result = await Plant.findAll({
      include: [
        {
          model: Tag,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          through: {
            attributes: [],
          },
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [Tag, 'order', 'ASC'],
      ],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const detailPlant = async (plantDTO) => {
  try {
    const baseResult = await Plant.findByPk(plantDTO, {
      attributes: {
        exclude: ['thumbnailPath', 'createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Tag,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          through: {
            where: {
              imagePath: {
                [Op.ne]: null,
              },
              description: {
                [Op.ne]: null,
              },
            },
            attributes: ['type', 'imagePath', 'description'],
          },
        },
      ],
    });

    const additonalResult = await Plant.findByPk(plantDTO, {
      attributes: [],
      include: [
        {
          model: Tag,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [[Tag, 'order', 'ASC']],
    });

    const tags = additonalResult.get({
      plain: true,
    });

    const tagArray = Object.values(tags)[0];
    const recommendTag = [];
    for (i in tagArray) {
      recommendTag.push(tagArray[i].name);
    }

    const allPlants = await Plant.findAll({
      attributes: ['id', 'name', 'thumbnailPath', 'description'],
      where: {
        id: {
          [Op.ne]: plantDTO,
        },
      },
      include: [
        {
          model: Tag,
          attributes: ['id', 'name', 'type'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [[Tag, 'order', 'ASC']],
    });

    const isRecommended = (Plant) => {
      const tags = Plant.get({
        plain: true,
      })['Tags'];

      const count = tags
        .map((tag) => tag.name)
        .filter((item) => recommendTag.includes(item)).length;
      return count > 4;
    };

    const recommendPlants = allPlants.filter((plant) => isRecommended(plant));

    const detailResult = baseResult.get({
      plain: true,
    });

    const tagOrderMap = {
      장소: [],
      온도: [],
      물주기: [],
      속도: [],
    };

    const makeMapOrder = (tagList) => {
      tagList
        .map((tagObj) =>
          tagObj.get({
            plain: true,
          })
        )
        .forEach((tags) => {
          tagOrderMap[tags.type].push(tags);
        });
    };

    makeMapOrder(baseResult.Tags);

    const orderedList = Object.values(tagOrderMap).reduce((prev, curr) => {
      return prev.concat(curr);
    });

    detailResult.Tags = orderedList;
    detailResult.allTags = tags.Tags;
    detailResult.recommendPlants = recommendPlants;

    await Plant.update(
      {
        todayViews: sequelize.literal('todayViews + 1'),
      },
      {
        where: {id: plantDTO},
      }
    );
    return detailResult;
  } catch (error) {
    console.error(error);
  }
};

const getCuratingResult = async (plantDTO) => {
  try {
    const result = await Plant.findOne({
      attributes: ['id', 'name', 'description', 'ment', 'imagePath'],
      where: {name: plantDTO},
      include: [
        {
          model: Tag,
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [[Tag, 'order', 'ASC']],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const searchPlantName = async (plantDTO) => {
  try {
    const result = await Plant.findAll({
      attributes: ['id', 'name', 'description', 'thumbnailPath'],
      where: {name: {[Op.like]: `${plantDTO}%`}},
      include: [
        {
          model: Tag,
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [[Tag, 'order', 'ASC']],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const searchPlantTag = async (plantDTO) => {
  try {
    const findPlantsIds = await Plant.findAll({
      attributes: ['id'],
      include: [
        {
          model: Tag,
          where: {
            name: {
              [Op.in] : plantDTO
            },
          },
          attributes: [],
          through: {
            attributes: [],
          },
        },
      ],
      having: sequelize.literal(`COUNT(DISTINCT Tags.name) = ${plantDTO.length}`),
      group: ['id'],
    });
    const plantIdArr = findPlantsIds
      .map((item) =>
        item.get({
          plain: true,
        })
      )
      .map((item) => item.id);

    const result = await Plant.findAll({
      attributes: ['id', 'name', 'description', 'thumbnailPath'],
      where: {
        id: {[Op.in]: plantIdArr},
      },
      include: [
        {
          model: Tag,
          attributes: ['id', 'name', 'type'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [[Tag, 'order', 'ASC']],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  recentOrderPlants,
  viewOrderPlants,
  allOrderPlants,
  detailPlant,
  getCuratingResult,
  searchPlantName,
  searchPlantTag,
};
