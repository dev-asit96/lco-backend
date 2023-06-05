const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

router.get('/api/v1/instagram', (req, res) => {
  const instagramObject = {
    username: 'dev-asit',
    followers: 1700,
  };

  res.status(200).json(instagramObject);
});

router.get('/api/v1/facebook', (req, res) => {
  const facebookObject = {
    username: 'devAsit96',
    followers: 1799,
  };

  res.status(200).json(facebookObject);
});

app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);
