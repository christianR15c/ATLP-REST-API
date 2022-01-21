const router = require('express').Router();
const verify = require('../controllers/verifyToken');
const addComment = require('../controllers/commentController');

router.post('/comment', verify, addComment);

module.exports = router;
