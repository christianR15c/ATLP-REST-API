const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

//Create a post
router.post('/articles', articleController.article_post);

// update an article in the database
router.put('/articles/:id', articleController.article_update);

// delete an article from the database
router.delete('/articles/:id', articleController.article_delete);

// get a post
router.get('/articles', articleController.article_getting);

module.exports = router;
