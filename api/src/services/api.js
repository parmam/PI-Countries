const axios = require('axios');

const {ALL_COUNTRIES, COUNTRIES_BY_NAME, COUNTRIES_BY_CODE} = require('../constants')

const getData = async () => {
    let countries = [];
    console.log('entra');
    try {
        let res = await axios.get(ALL_COUNTRIES);
        let data = res.data;
        countries = data.map((c) => {
            let country = {
                name: c.name,
                id: c.alpha3Code,
                img: c.flag,
                continent: c.region,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area,
                population: c.population
            }
            return country
        })

    } catch (error) {
        console.log(error);
    }
    return countries
}














module.exports = {
    getData,
}