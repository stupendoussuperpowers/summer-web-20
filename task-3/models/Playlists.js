const mongoose=require('mongoose');
const PlaylistsSchema=mongoose.Schema({
    songs:Array,
    description:String,
})

module.exports=mongoose.model('Playlists',PlaylistsSchema);