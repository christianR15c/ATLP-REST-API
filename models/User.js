const mongoose = require('mongoose');

// creating user Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// create user model
const User = mongoose.model('User', userSchema);

module.exports = User;
