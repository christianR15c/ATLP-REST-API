const express = require('express');
const router = express.Router();
const verify = require('../controllers/verifyToken');

router.get('/admin', verify, (req, res) => {
  res.send('Admin page');
});

module.exports = router;
