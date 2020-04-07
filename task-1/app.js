//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const items = [
    //... Enter some test items here in json format
    {title: 'Naruto Uzamaki', id: 1},
    {title: 'Kakashi Hatake', id: 2},
    {title: 'Sasuke Uchiha', id: 3}
];


//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
app.get('/all', (req, res) => res.send(items));


// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
app.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    const item = items.find(c => c.id ===parseInt(req.params.id));
    if(!item)
    res.status(404).send('<h2>Not Found!</h2>');
    res.send(item);
});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match


app.post('/additem', (req, res) => {

    const item  = {
        id: items.length+1,
        title: req.body.title
    };
    items.push(item);
    res.send(item);
});

app.put('/edititem/:id', (req,res) =>{
    const item = items.find(c => c.id ===parseInt(req.params.id));
    if(!item)
    res.status(404).send('<h2>Not Found!</h2>');
    item.title = req.body.title;
    res.send(item);
});

//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));
