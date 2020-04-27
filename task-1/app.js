const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


let items = [
    {
        id: 1,
        name: "Paawan",
        age: 20
    },
    {
        id: 2,
        name: "Abc Xyz",
        age: 18
    },
    {
        id: 3,
        name: "Npm Def",
        age: 21
    }
];

app.get('/all', (req, res) => res.send(items));


app.get("/item/:id", function (req, res) {
    const reqID = Number(req.params.id);
    const filtered = items.filter((item) => item.id === reqID);
    res.send(filtered);
});


app.post('/additem', (req, res) => {
    const data = req.body;
    const {id, name, age} = data;

    if (!id || !name || !age) {
        return res.send("Invalid data provided! Required fields are id, name and age.");
    }

    items.push(data);
    res.send("Item added succesfully");
});



app.put('/edititem/:id', (req, res) => {

    const idToEdit = Number(req.params.id);
    const data = req.body;
    console.log(idToEdit, data);

    items.forEach( (item) => {
        if (item.id === idToEdit) {
            if (data.name) {
                item.name = data.name;
            }
            if (data.age) {
                item.age = data.age;
            }
        }
    });

    res.send("Data updated.");
});


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));