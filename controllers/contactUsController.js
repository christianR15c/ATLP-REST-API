const Query = require('../models/ContactUs');

const query_posting = (req, res) => {
  const query = new Query(req.body);
  query
    .save()
    .then((query) => res.send(query))
    .catch((err) => console.log(err));
};

const query_getting = (req, res) => {
  Query.find()
    .sort({ createdAt: -1 })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

module.exports = {
  query_posting,
  query_getting,
};
