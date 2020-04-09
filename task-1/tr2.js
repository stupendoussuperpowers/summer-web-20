const express =require('express')
const app = express();
const bodyParser=require('body-parser');

//Use const rather than var, you don't want your app to crash beacuse you tried to change it later
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var resources = [
    {
        id: 1,
        name: 'Foo'
    }
];

app.get('/resources', function(req, res) {
    res.send(resources);
});

app.get('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = resources.filter(r => r.id === id)[0];

    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});


app.post('/resource', function(req, res) {
    
    //You cant add the object directly, first make the object item and then psuh it to the array.
    
    var item = {
        id: req.body.id,
        name :req.body.name,
    };
    console.log(req.body)
    if (!item.id) {
        return res.sendStatus(500);
    }

    resources.push(item);

    res.send('/resources/' + item.id);
});

//Now that i've fixed your post request, try to look into the put request 

app.put('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = resources.filter(r => r.id === id)[0];

    if (!existingItem) {
        let item = req.body;
        item.id = id;
        resources.push(item);
        res.setHeader('Location', '/resources/' + id);
        res.sendStatus(201);
    } else {
        existingItem.name = req.body.name;
        res.sendStatus(204);
    }
});


var server = app.listen(1337, () => {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
