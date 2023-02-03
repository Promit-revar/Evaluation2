const router = require('express').Router();
const contollers = require('../controllers/csvDataStorageController');
router.post('/api/save',contollers.getCsvData);
module.exports=router