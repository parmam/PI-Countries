const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db');
const { Op, where } = require('sequelize');
const { getData } = require('../services/api')
const router = Router()

router.get('/', async (req, res) => {
    let allCountries = [];
    let filteredCountries = [];
    const {name, continent, activity} = {...req.query}

    const countries = await getData();
    let loaded = await Country.findAll();
    try {
        (loaded.length != countries.length) 
        ? (countries.map((c) => {
            Country.findOrCreate({
                where:{
                    name:c.name,
                    idCountry: c.id,
                    img: c.img,
                    continent: c.continent,
                    capital: c.capital,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population      
                }
            })
        })) 
        :(console.log(loaded))
        if(name === "" && loaded){
            loaded = await Country.findAll({
                include:{
                    model:Activity
                }
            });
            allCountries = loaded
        }
        if(name && loaded){
            loaded = await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]: "%" + name + "%"
                    }
                },
                include:{
                    model:Activity
                }
            });
            allCountries = loaded
        } 
        if(continent === 'DEFAULT' && activity === 'DEFAULT'){
            filteredCountries = allCountries
        }

        if(continent !== 'DEFAULT' && activity === 'DEFAULT'){
            filteredCountries = allCountries.filter((c) => {
                if (c.continent === continent) return c
            })
        }
    
        if(continent === 'DEFAULT' && activity !== 'DEFAULT'){
            filteredCountries = allCountries.filter((c) => {
                if(c.activities !== []) return c.activities.some((a) => a.name === activity)
            })
        }

        if(continent !== 'DEFAULT' && activity !== 'DEFAULT'){
            filteredCountries = allCountries.filter((c) => {
                if (c.continent === continent) {
                    if(c.activities !== []) return c.activities.some((a) => a.name === activity)
                }
            })
        }
        
        res.send(filteredCountries);

        console.log(req.query)

    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let country = []
    try {
        console.log(id)
        country = await Country.findOne({
            where:{
                id:{
                    [Op.eq]:id
                }
            },
            include:{
                model:Activity
            }
        })
        console.log(country)
        res.send(country)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;