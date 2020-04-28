var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');

router.use(bodyParser.json()); // support json encoded bodies
const port = 3000;
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var items = [
    {"id" : "1","name" : "a","phone" : "1"},
    {"id" : "2","name" : "b","phone" : "2"},
    {"id" : "3","name" : "c","phone" : "3"},
    {"id" : "4","name" : "d","phone" : "4"},
    {"id" : "5","name" : "e","phone" : "5"},
    {"id" : "6","name" : "f","phone" : "6"},
    {"id" : "7","name" : "g","phone" : "7"},
    {"id" : "8","name" : "h","phone" : "8"},
];
var last = items.length;
// middleware that is specific to this router
router.use(function req_bodyLog (req, res, next) {
    console.log('Body: ', req.body)
    next()
  })
//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
router.get('/all', (req, res) => res.send(items));


// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
router.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    var x = req.params.id;
    for (i of items) {
        if(i.id == x){
            res.send(i);
        }
    }
});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match
function addItem(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var phone = req.body.phone;
    console.log('Got Body ' + id + ' ' + name + ' ' + phone);
    items[last] = {
        "id": id,
        "name" : name,
        "phone" : phone,
    }
    last = last + 1;
    res.sendStatus(200);  
}

router.post('/additem', addItem);

function editItem(req, res){
    //Implement editing an item here
    var id = req.body.id;
    var name = req.body.name;
    var phone = req.body.phone;
    var x = req.params.id;
    var iter = 0;
    for (i of items){
        if (i.id == x){
            items[iter] = {
                "id" : id,
                "name" : name,
                "phone" : phone
            }
        }
        iter = iter + 1;
    }
    res.send('Edited');
}

router.put('/edititem/:id', editItem);

module.exports = router