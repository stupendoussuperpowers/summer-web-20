//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();

const port = 3000;

var items = [
  //... Enter some test items here in json format
  {
    "name":"Abc"},
  {  "cars":["BMW", "Fiats"]},
    {"age":30
  }
];

//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
app.get('/', (req, res) => res.send(items));


// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
app.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    res.send(items[req.params.id]);
});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match
function addItem(req, res){
    //Implement adding item here
    var obj = {"city":"XYZ"};
    items.push(obj);
    res.send(items);
}

app.post('/additem', addItem);

function editItem(req, res){
    items[req.params.id] = "XYZ";
    res.send(items);
}

app.put('/edititem/:id', editItem);

//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));
