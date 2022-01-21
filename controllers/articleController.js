const { result } = require('@hapi/joi/lib/base');
const Article = require('../models/Articles');

const article_update = (req, res) => {
  const id = req.params.id;
  Article.findByIdAndUpdate(id, req.body)
    .then((article) => res.send(`successfully updated`))
    .catch((err) => console.log(err));
};

const article_post = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((article) => res.send(article))
    .catch((err) => console.log(err));
};

const article_delete = (req, res) => {
  const id = req.params.id;
  Article.findByIdAndDelete(id)
    .then((article) =>
      res.send(`${article.title} article is successfuly deleted`)
    )
    .catch((err) => console.log(err));
};

const article_getting = (req, res) => {
  Article.find()
    .sort({ createdAt: -1 })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

module.exports = {
  article_post,
  article_update,
  article_delete,
  article_getting,
};
