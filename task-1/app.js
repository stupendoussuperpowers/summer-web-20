const express = require('express');
const app = express();
const port = 4000;

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
var len =4;

app.get('/', (req, res)=>{
    res.send("<h1><center>Welcome to the / page!</center></h1>");
})

app.get('/all', (req, res) => res.send(items));

app.get('/item/:id', function(req, res){
   
    let id = req.params.id;
    let name;
    for(var i=0;i<len;i++){
        if(items[i]["ID"]==id){
            name = items[i]["Name"]
        }
    }
    res.send(name);
});

function addItem(req, res){
    let name="Elsa";
    let item= req.params.item;
    items.push({
        "Name": name, 
        "ID": item
    });
    res.send("Successfully added new item to list");
    len+=1;
}
app.post('/additem/:item', addItem);

function editItem(req, res){
    let id = req.params.id;
    for(var i=0;i<len;i++){
        if(items[i]["ID"]==id){
            items.splice(i, 1);
        }
    }
    items.push({
        "Name": "Farhan",
        "ID": id
    })
    res.send("Edited the item in the list");
}
app.put('/edititem/:id', editItem);

app.listen(port, () => console.log(`Listening at port ${port}`));