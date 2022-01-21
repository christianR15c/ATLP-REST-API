const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating article schema (strucure of our article)
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false,
    },
    article_id: String,
  },

  { timestamps: true }
);

// creating a model depending on the schema and give it a name similar to collection name in a database
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
