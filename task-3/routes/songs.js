const express=require("express");
const router=express.Router();
const Songs=require('../models/Songs');

//gets all songs in db
router.get("/",(req,res)=>{
    const songs=Songs.find()
    .then(songs=>{
        res.json(songs)
    })
    .catch(err=>{
        //console.log(err);
        res.json({message:err})
    });
    
});

//posts a song
router.post('/',(req,res)=>{
    const song=new Songs({
        title:req.body.title,
        artist:req.body.artist,
        genre:req.body.genre,
        album:req.body.album
    }) 
    song.save()
    .then(data=>{
        //console.log(data);
        res.json(data)
    })
    .catch(err=>{
        //console.log(err);
        res.json({message:err})
    });
});

//get song by uniqueid
router.get('/:songid',(req,res)=>{
    Songs.findById(req.params.songid)
    .then(songs=>{
        res.json(songs)
    }).catch(err=>{
        res.json({message:err})
    })
})

//deltes song by uniqueid
router.delete('/:songid',(req,res)=>{
    Songs.findByIdAndDelete(req.params.songid)
    .then(songs=>{
        res.json(songs)})
    .catch(err=>{
        res.json({message:err})
    });
});

//updates song by uniqueid
router.patch('/:songid',(req,res)=>{
    Songs.updateOne({_id:req.params.songid},{$set:{title:req.body.title}})
    .then(songs=>{
        res.json(songs)
    }).catch(err=>{
        res.json({message:err})
    });
})

router.get("/:genre",(req,res)=>{
    Songs.findOne({genre:req.params.genre})
    .then(songs=>{
        res.json(songs)
    }).catch(err=>{
        res.json({
            message:err
        })
    })
});
router.get("/:artist",(req,res)=>{
    Songs.find({artist:req.params.artist})
    .then(songs=>{
        res.json(songs)
    }).catch(err=>{
        res.json({
            message:err
        })
    })
});
router.get("/:album",(req,res)=>{
    Songs.find({album:req.params.album})
    .then(songs=>{
        res.json(songs)
    }).catch(err=>{
        res.json({
            message:err
        })
    })
})
module.exports=router;

// DATA
//     title:"Believer",
//     artist:"Imagine Dragons, To The Stars",
//     genre:"poprock",
//     album:"Believer",

//     title:"Thunder",
//     artist:"Imagine Dragons",
//     genre:"pop",
//     album:"Evolve",

//     title:"Bad Liar",
//     artist:"Imagine Dragons",
//     genre:"indie",
//     album:"Origins",