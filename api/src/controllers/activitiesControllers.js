const { Router } = require("express");
const { Country, Activity, country_activity } = require('../db');
const { Op, where } = require('sequelize');
const router = Router();

router.post('/', async (req, res) => {
    const {activity} = {...req.body}
    const {name, duration, dificulty, countries, season} = {...activity}
    console.log(name)
    let selectedCountries = await Country.findAll({
        where:{
            name:{
                [Op.in]:countries
            }
        }
    })
    let countriesIds = selectedCountries.map(c => { return c.id })
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
router.get('/', async (req, res) => {
    try {
        let activities = await Activity.findAll()
        let activitiesArr = activities.map(a => a.name)
        let noRepeat = new Set(activitiesArr)
        res.send([...noRepeat])
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;