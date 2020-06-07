const express=require("express");
const router=express.Router();
const Playlists=require('../models/Playlists');

//gets all playlists
router.get("/",(req,res)=>{
    // res.send("playlists");
    const playlists=Playlists.find()
    .then(playlists=>{
        res.json(playlists)
    }).catch(err=>{
        res.json({message:err})
    })
});

//posts a playlist
router.post('/',(req,res)=>{
    const playlist=new Playlists({
        songs:req.body.songs,
        description:req.body.description
    }) 
    playlist.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({message:err})
    })
});

//gets a playlist by uniqueid
router.get('/:playlistid',(req,res)=>{
    Playlists.findById(req.params.playlistid).then(playlists=>{
        res.json(playlists)})
    .catch(err=>{
        res.json({message:err})
        
    });
});

//deltes a complete playlist
router.delete('/:playlistid',(req,res)=>{
    Playlists.findByIdAndDelete(req.params.playlistid).then(playlists=>{
        res.json(playlists)
    }).catch(err=>{
        res.json({message:err})
    });
})

//updates playlist songs by uniqueid
router.patch('/:playlistid',(req,res)=>{
    Playlists.updateOne({_id:req.params.playlistid},{$set:{songs:req.body.songs}})
    .then(playlists=>{
        res.json(playlists)
    }).catch(err=>{
        res.json({message:err})
    });
})
module.exports=router;

//DATA
    // createdby:"Imagine Dragons",
    // songs:["Believer","Thunder","Bad Liar"],
    // title:"Imagine Dragons",

    // createdby:"Martin Garrix",
    // songs:["Scared to be lonely",
    //     "Summer Days",
    //     "In the name of love"],
    // title:"Martin Garrix",