//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();

const port = 3000;

var crud = require('./routes/crud')

app.use('/', crud)

//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));