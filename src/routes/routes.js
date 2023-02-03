const router = require('express').Router();
const { validatePost } = require("../middlewares/validation")
const contollers = require('../controllers/csvDataStorageController');
const rankingController = require('../controllers/rankingController');
router.post('/api/save', validatePost, contollers.getCsvData);
router.get('/api/companies', rankingController.getTopCompanies);

module.exports = router