const mongoose=require('mongoose');
const SongsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:String,
    artist:String,
    album:String
})

module.exports=mongoose.model('Songs',SongsSchema);