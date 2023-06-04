// const express = require('express');
// const format = require('date-format');
// const serverless = require('serverless-http');
// const router = express.Router();

// // create an app from express
// const app = express();
// const PORT = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.status(200).send('<h1>Hello from get request!</h1>');
// });

// app.get('/api/v1/:token', (req, res) => {
//   console.log(req.params.token);
//   res.status(200).json({ params: req.params.token });
// });

// // instagram get request
// app.get('/app/v1/instagram', (req, res) => {
//   const instaObject = {
//     userName: 'devAsit',
//     followers: 66,
//     follow: 70,
//     date: format.asString('dd[MM] hh:mm:ss', new Date()),
//   };

//   res.status(200).json(instaObject);
// });

// // facebook get request
// app.get('/app/v1/facebook', (req, res) => {
//   const facebookObject = {
//     userName: 'devAsit',
//     followers: 66,
//     follow: 70,
//     date: Date.now(),
//   };

//   res.status(200).json(facebookObject);
// });

// // linkedin get request
// app.get('/app/v1/linkedin', (req, res) => {
//   const linkedinObject = {
//     userName: 'devAsit',
//     followers: 66,
//     follow: 70,
//     date: Date.now(),
//   };

//   res.status(200).json(linkedinObject);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

// app.use('/.netlify/functions/api', router);
// module.exports.handler = serverless(app);

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
