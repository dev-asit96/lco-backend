const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
// swagger ui docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('../swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);
