const { Router } = require("express");
const { Country, Activity, country_activity } = require('../db');
const { Op, where } = require('sequelize');


const router = Router();

router.get('/', async (req, res) => {

})



module.exports = router;