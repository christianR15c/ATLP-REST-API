const express = require('express');
const router = express.Router();
const queryControllers = require('../controllers/contactUsController');

router.post('/contact-us', queryControllers.query_posting);

router.get('/contact-us', queryControllers.query_getting);

module.exports = router;
