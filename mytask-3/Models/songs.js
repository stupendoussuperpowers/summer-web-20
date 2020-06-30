const mongoose =require('mongoose')

const songSchema=mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Artist:{
        type:String,
        default:"Artist Unknown"
    },
    Genre:{
        type:String,
        default:"Unknown Genre"
    },
    Album:{
        type:String,
        default:"Unknown Album"
    }
})

module.exports=mongoose.model('songs',songSchema)