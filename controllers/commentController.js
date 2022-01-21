const Article = require('../models/Articles');

const addComment = (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    comment: req.body.comment,
    article_id: req.body._id,
  });

  const articleExist = Article.findOne({ _id: req.body._id });
  if (!articleExist) {
    res.status(404).send({ message: 'comment are related with a post' });
  } else {
    article.save();
    res.send({
      data: qry,
      status: 'Ok',
      message: 'comment added successfuly',
    });
  }
};

module.exports = addComment;
