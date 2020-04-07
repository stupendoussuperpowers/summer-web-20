//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests
const express = require('express');
const app = express();
const items = require('./Items')

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3000;

app.get('/', (req, res) => res.send('Hello there!'))

//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made
app.get('/all', (req, res) => res.send(items));

app.get('/item', (req, res) => res.send(items));

// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below
app.get('/item/:id', function(req, res){
    //Implement searching for ID and send
    const found = items.some(item => item.id ===parseInt(req.params.id));

    //Send req if item on id is found
	if(found){
		res.json(items.filter(item => item.id === parseInt(req.params.id)));
	}
	//Send code for bad request
	else{
		res.status(400).json({msg: `item with id ${req.params.id} not found`});
	}
});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match
function addItem(req, res){
    //Implement adding item here
    //res.send('got 1');

    //to store new item in format
    const newItem = {
    	id: req.body.id,
    	name: req.body.name
    };

    if(!newItem.id || !newItem.name){
    	return res.status(400).json({msg: `add name or id`});
    }

    //push to object
    items.push(newItem);
    res.json(items);
}

app.post('/additem', addItem);

function editItem(req, res){
    //Implement editing an item here

    const found = items.some(item => item.id ===parseInt(req.params.id));

    //Send req if item on id is found
	if(!found){
		res.status(400).json({msg: `item with id ${req.params.id} not found`});
	}
	//Send code for bad request
	else{
		const editedItem = req.body;
		items.forEach(item =>{
			if(item.id === parseInt(req.params.id)){
				item.name = editedItem.name ? editedItem.name : item.name;
			}
		})
	}

	res.json(items);
}

app.put('/edititem/:id', editItem);

//This is what runs your backend server on localhost:portnumber the portnumber can be anything,
//the callback arrow function notifies you about the server being up
app.listen(port, () => console.log(`Listening at port ${port}`));
