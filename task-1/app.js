//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();

const port = 3000;

var items = [
    //... Enter some test items here in json format
    {
        "Name": "GirlsLikeYou",
        "ID": 0
    },

    {
        "Name": "Memories",
        "ID": 1
    },

    {
        "Name": "Marz",
        "ID": 2
    }
 
];
var size =3;
app.get('/', (req, res)=>{
    res.send("Hello!");
})
//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
app.get('/all', (req, res) => res.send(items));


// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
app.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    var i = req.params.id;
    var name;
    for(var j=0;j<size;j++){
        if(items[j]["ID"]==i){
            name = items[j]["Name"]
        }
    }
    res.send(name);
});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match
function addItem(req, res){
    //Implement adding item here
    var item= req.params.item;
    var name = "Sacrifice";
    items.push({
        "Name": name, 
        "ID": item
    });
    res.send("Successfully added");
    size = size+1;
}

app.post('/additem/:item', addItem);

function editItem(req, res){
    //Implement editing an item here
    var id = req.params.id;
    var obj;
    for(var i=0;i<size;i++){
        if(items[i]["ID"]==id){
            items.splice(i, 1);
        }
    }
    items.push({
        "Name": "Bella Ciao",
        "ID": id
    })
    res.send("Edited!");
}

app.put('/edititem/:id', editItem);

//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));
