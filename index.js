const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articleRouter = require('./routes/article');
const commentRouter = require('./routes/comment');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const contactUsRouter = require('./routes/contactUs');
const multer = require('multer');
const path = require('path');
const fileupload = require('express-fileupload');

dotenv.config();

// seting up express
const app = express();
app.use(fileupload());

// connecting to mongoDB
const dbURL =
  'mongodb+srv://christian:David15maso@nodejs.goro3.mongodb.net/ATLP-Capstone-project?retryWrites=true&w=majority';
mongoose
  .connect(dbURL)
  .then((result) => {
    app.listen(5000, () => console.log('listening to port 5000...'));
  })
  .catch((err) => console.log(err));

// creating image storage
const upload = multer({
  dest: './images',
});

app.post('/api/articles/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send(req.body);
});

// middleware
app.use(bodyParser.json());

// Route Middlewares
app.use('/api', articleRouter);
app.use('/api/articles', commentRouter);
app.use('/api/user', authRouter);
app.use('/api/user', adminRouter);
app.use('/api', contactUsRouter);
