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

//Here instead of having /:genre, have /filter(or anything that suits you)
router.get(`/genre/:genre`,async (req,res)=>{
    const filtergenre = req.params.genre
    console.log(filtergenre)
   
   //Learn how to avoid the then,catch statements with ES6 async await statements 

    var data = await Songs.findOne({genre:req.params.genre})
    
    if(!data){
        console.log("No documents")
        return res.send("Error fetching data")
    }
    console.log(data)
    res.send(data);
   // .then(songs=>{

    //     res.json(songs)
    // }).catch(err=>{
    //     console.log(err)
    //     res.json({
    //         message:err
    //     })
    // })
});
router.get("/artist/:artist",async(req,res)=>{
    const filterartist=req.params.artist
    console.log(filterartist)
    
    var data=await Songs.findOne({artist:req.params.artist})
    if(!data){
        console.log("No documents")
        return res.send("error fetching data")
    }
    console.log(data)
    res.send(data);

    // .then(songs=>{
    //     res.json(songs)
    // }).catch(err=>{
    //     res.json({
    //         message:err
    //     })
    // })
});
router.get("/album/:album",(req,res)=>{
    const filteralbum=req.params.album
    console.log(filteralbum)
    var data=await Songs.findOne({album:req.params.album})
    if(!data){
        console.log("No documents")
        res.send("Unable to fetch data")
    }
    console.log(data)
    res.send(data)
    // .then(songs=>{
    //     res.json(songs)
    // }).catch(err=>{
    //     res.json({
    //         message:err
    //     })
    // })
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