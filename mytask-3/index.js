const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const songroute =require('./Routes/songs')
const playlistroute=require('./Routes/playlist')

//Middleware for bodyparser:json
app.use(bodyparser.json())

//Connection to Database:MongoDB
mongoose.connect("mongodb://localhost:27017/songsdb",{ useUnifiedTopology: true , useNewUrlParser: true },(error)=>{
    if(!error)
    console.log("Sucessfully connected to Mongo db")
    else
    console.log("Error connecting to Mongo db")
})

app.get("/",(req,res)=>{
    res.send("<h1>Home Page<h1>")
})

//Middleware for song
app.use('/songs',songroute)

//Middleware for playlist
app.use('/playlist',playlistroute)

//Listening at port:4000
 app.listen(4000,()=>{
   console.log("Server is running at port 4000")
})

