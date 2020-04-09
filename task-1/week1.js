const express =require('express')
const app = express();
const bodyParser=require('body-parser');


app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World! \n Use GET, POST and PUT requests to interact with me. \n\n GET request: \n /all for all items \n /item/:id for a specific \n\n POST request: \n  /additem to add item \n\n PUT request: \n /edititem/:id to update item ');
});

var items = [
    {
        id: 1,
        name: 'Foo'
    }
];

app.get('/all', function(req, res) {
    res.send(items);
});

app.get('/item/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = items.filter(r => r.id === id)[0];

    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});


app.post('/additem', function(req, res) {



    var item = {
        id: req.body.id,
        name :req.body.name,
    };
    console.log(req.body)
    if (!item.id) {
        return res.sendStatus(500);
    }
    var id = parseInt(item.id, 10);
    var existingItem = items.filter(r => r.id === id)[0];
    if(!existingItem){
    items.push(item);}
    else {res.sendStatus(208)} // to say that item is already there
    res.send('find item at /item/' + item.id);
});



app.put('/edititem/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = items.filter(r => r.id === id)[0];
    if (!existingItem) {
      var item = {
          id: req.body.id,
          name :req.body.name,
      };
      console.log(req.body)
      if (!item.id) {
          return res.sendStatus(500);
      }

      items.push(item);

      res.send('find item at /item/' + item.id);

    } else {

        var item = {
            id: req.body.id,
            name :req.body.name,
        };
        existingItem.name = item.name;
        existingItem.id = item.id;
        console.log(req.body)


        res.send('find item at /item/' + item.id);
    }

});


var server = app.listen(1337, () => {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
