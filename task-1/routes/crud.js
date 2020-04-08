var express = require('express');
var router = express.Router();

const items = [
    //... Enter some test items here in json format
    {title: 'Naruto Uzamaki', id: 1},
    {title: 'Kakashi Hatake', id: 2},
    {title: 'Sasuke Uchiha', id: 3}
];
var logger = function (req, res, next){
    console.log(req.body)
    next()
}
router.use(logger)

router.get('/all', (req, res) => res.send(items));



router.get('/item/:id', function(req, res){
    
    const item = items.find(c => c.id ===parseInt(req.params.id));
    if(!item)
    res.status(400).send({error:"not found"});
    res.send(item);
});





router.post('/additem', (req, res) => {

    const item  = {
        id: items.length+1,
        title: req.body.title
    };
    items.push(item);
    res.send(item);
});

router.put('/edititem/:id', (req,res) =>{
    const item = items.find(c => c.id ===parseInt(req.params.id));
    if(!item)
    res.status(400).send({error:"Not Found!"});
    item.title = req.body.title;
    res.send(item);
});

module.exports = router;