const express = require('express');
const app = express();
const port = 4000;
const bodyParser=require("body-parser");
const router=express.Router();
var crud=require("./routes/crud");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/crud',crud);

app.listen(port, () => console.log(`Listening at port ${port}`));
module.exports=router;