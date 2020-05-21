const express = require('express');
const app = express();
const port = 4000;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var items = [
    //... Enter some test items here in json format
    {
        "Name": "Alex",
        "ID": 0
    },

    {
        "Name": "Bob",
        "ID": 1
    },

    {
        "Name": "Charley",
        "ID": 2
    },
    {
        "Name": "David",
        "ID": 3
    }
 
];

//GET

app.get('/', (req, res)=>{
    res.send("<h1><center>Welcome to the root page!</center></h1>");
    console.log("in /");
})

app.get('/all', (req, res) => {
    res.send(items);
    console.log("in /all")
});

app.get('/item/:id', function(req, res){
   
    let id = req.params.id;
    let name;
    for(var i=0;i<items.length;i++){
        if(items[i]["ID"]==id){
            name = items[i]["Name"]
        }
    }
    res.send(name);
    console.log("recieved current name");
});

//POST

function addItem(req, res){
    let name = req.body.name;
    let id= req.params.id;
    items.push({
        "Name": name, 
        "ID": id
    });
    res.send("Successfully added new item to list");
    console.log("added item to list");
}

//PUT

function editItem(req, res){
    let name=req.body.name;
    let id = req.params.id;
    
    for(var i=0;i<items.length;i++){
        if(items[i]["ID"]==id){
            items.splice(i, 1);
        }
    }
    items.push({
        "Name": name,
        "ID": id
    })
    res.send("Edited item");
    console.log("edited item");
}

app.put('/edititem/:id', editItem);
app.post('/additem/:id',addItem);

app.listen(port, () => console.log(`Listening at port ${port}`));