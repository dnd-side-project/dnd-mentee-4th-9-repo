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
      order: [['createdAt', 'DESC']],
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
      order: [['views', 'DESC']],
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
      order: [['createdAt', 'DESC']],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const baseResultFunc = async (plantDTO) => {
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
    return baseResult;
  } catch (error) {
    console.error(error);
  }
};

const additonalResultFunc = async (plantDTO) => {
  try {
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
    });
    return additonalResult;
  } catch (error) {
    console.error(error);
  }
};

const allPlantsFunc = async (plantDTO) => {
  try {
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
    });
    return allPlants;
  } catch (error) {
    console.error(error);
  }
};

const plantUpdate = async (plantDTO) => {
  try {
    await Plant.update(
      {
        views: sequelize.literal('views + 1'),
      },
      {
        where: {id: plantDTO},
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const detailPlant = async (plantDTO) => {
  try {
    const baseResult = await baseResultFunc(plantDTO);

    const additonalResult = await additonalResultFunc(plantDTO);

    const tags = additonalResult.get({
      plain: true,
    });

    const tagArray = Object.values(tags)[0];

    const recommendTag = [];

    for (i in tagArray) {
      recommendTag.push(tagArray[i].name);
    }

    const allPlants = await allPlantsFunc(plantDTO);

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

    detailResult.allTags = tags.Tags;
    detailResult.recommendPlants = recommendPlants;

    await plantUpdate(plantDTO);

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
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const searchPlantTag = async (plantDTO) => {
  try {
    const result = await Plant.findAll({
      attributes: ['id', 'name', 'description', 'thumbnailPath'],
      include: [
        {
          model: Tag,
          where: {name: {[Op.or]: plantDTO}},
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
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
