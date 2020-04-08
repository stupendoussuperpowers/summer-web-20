//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
var crud = require('./routes/crud');
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/crud', crud);
app.listen(port, () => console.log(`Listening at port ${port}`));
module.exports = router;