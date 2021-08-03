const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db');
const { Op, where } = require('sequelize');
const { getData } = require('../services/api')
const router = Router()

router.get('/', async (req, res) => {
    let filteredCountries = [];
    let search = req.query.name;
    const countries = await getData();
    let loaded = await Country.findAll();
    try {
        (loaded.length != countries.length) ? (countries.map((c) => {
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
        if(search === undefined && loaded){
            loaded = await Country.findAll({
                include:{
                    model:Activity
                }
            });
            filteredCountries = loaded
        }
        if(search && loaded){
            loaded = await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]: "%" + search + "%"
                    }
                },
                include:{
                    model:Activity
                }
            });
            filteredCountries = loaded
            console.log(filteredCountries)
        } 
    } catch (error) {
        console.log(error);
    }
    res.send(filteredCountries);
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
    } catch (error) {
        console.log(error)
    }
    res.send(country)
})

module.exports = router;