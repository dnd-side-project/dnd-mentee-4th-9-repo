const Plant = require('../models/plant.model');

const quratingResult = async (req,res)=>{
    const resultPlant = await Plant.findOne({where:{name:req.body.plant}});
    res.json(resultPlant);
}

module.exports ={quratingResult};