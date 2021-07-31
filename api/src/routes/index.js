const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesControllers = require('../controllers/countriesControllers')
const ActivitiesControllers = require('../controllers/activitiesControllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountriesControllers);
router.use('/activity', ActivitiesControllers);

module.exports = router;
