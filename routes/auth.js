const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {
  signupValidation,
  loginValidation,
} = require('../controllers/validation');
// name, email and password validation

router.post('/register', async (req, res) => {
  // validating inputs (name, email and password)
  const { error } = signupValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // checking if the user is already in database
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) return res.status(404).send(`Email already exists`);

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // creating a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

router.post('/login', async (req, res) => {
  // validating email and password
  const { error } = loginValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // checking if the user is already in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send(`user doesn't exists`);

  // checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(404).send('Invalid password');

  // checking if user is admin or a basic user then create and assign a token
  if (user.email === 'habinezac15@gmail.com') {
    const token = jwt.sign({ _id: user._id }, `${process.env.SECRET_TOKEN}`);
    return res
      .header('auth-token', token)
      .send(` You signed in as ADMIN \nToken: ${token}`);
  }

  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET_TOKEN}`);
  res
    .header('auth-token', token)
    .send(`You signed in as BASIC USER \nToken: ${token}`);
});
module.exports = router;
