//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();

const port = 3001;

let items = [
    //... Enter some test items here in json format
"Rhea","Manipal","18","IECSE","1","2","3"
];

app.get('/',(req,res)=>{
    console.log("HEY! THIS IS ABOUT ME")
})
//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
app.get('/all', (req,res) => {
   res.send(items);
    
});
app.get('/:id', (req,res) => {
    let id=req.params.id;
    res.status(200).json(
        {
            message:"GET request for /:id successful",
           id:id
        }
    )
});
// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
app.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    let id=req.params.id;
    res.status(200).json({
        message:"item :id is here",
        id:id,
        item:items[id]
    })
});
//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match
//app.post('/additem', addItem);
//app.put('/edititem/:id', editItem);

//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));
