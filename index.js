const express = require('express');
const format = require('date-format');

// create an app from express
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello from get request!</h1>');
});

app.get('/api/v1/:token', (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ params: req.params.token });
});

// instagram get request
app.get('/app/v1/instagram', (req, res) => {
  const instaObject = {
    userName: 'devAsit',
    followers: 66,
    follow: 70,
    date: format.asString('dd[MM] hh:mm:ss', new Date()),
  };

  res.status(200).json(instaObject);
});

// facebook get request
app.get('/app/v1/facebook', (req, res) => {
  const facebookObject = {
    userName: 'devAsit',
    followers: 66,
    follow: 70,
    date: Date.now(),
  };

  res.status(200).json(facebookObject);
});

// linkedin get request
app.get('/app/v1/linkedin', (req, res) => {
  const linkedinObject = {
    userName: 'devAsit',
    followers: 66,
    follow: 70,
    date: Date.now(),
  };

  res.status(200).json(linkedinObject);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
