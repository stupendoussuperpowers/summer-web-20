const mongoose=require('mongoose')

const playlistSchema=mongoose.Schema({
    CreatedBy:{
        type:String,
        require:true
    },
    Songs:Array,
    Title:String
})

module.exports=mongoose.model('playlist',playlistSchema)