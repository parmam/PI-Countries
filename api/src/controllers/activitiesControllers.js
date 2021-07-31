const { Router } = require("express");
const { Country, Activity, country_activity } = require('../db');
const { Op, where } = require('sequelize');


const router = Router();

router.post('/', async (req, res) => {
    const {name, dificulty, duration, season, countriesIds} = req.body;
    console.log(countriesIds)
    try {
        let activity = await Activity.findOrCreate({
            where:{
                name:name,
                dificulty:dificulty,
                duration:duration,
                season:season
            }
        })
        let country = await Country.findAll({
            where:{
                id:{
                    [Op.in]:countriesIds
                }
            }
        })
        console.log(activity[0])
        console.log(country)
        await activity[0].addCountry(country)
        console.log('llego hasta aca')
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;