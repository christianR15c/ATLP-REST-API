const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating article schema (strucure of our article)
const querySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating a model depending on the schema and give it a name similar to collection name in a database
const Query = mongoose.model('Queries', querySchema);
module.exports = Query;
