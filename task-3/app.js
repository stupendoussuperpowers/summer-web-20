const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/songsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },()=>{
      console.log("DB connected!")
  });

//Middleware
app.use(bodyParser.json());
const songsRoute=require('./routes/songs');
const playlistsRoute=require('./routes/playlists');
app.use('/songs',songsRoute);
app.use('/playlists',playlistsRoute);


app.get("/",(req,res)=>{
    res.send("HOME");
})

app.listen(3000,()=>{
    console.log("server is running!")
})