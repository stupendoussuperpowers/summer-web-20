const express=require('express')
const router=express();
const songs= require("../Models/songs")

//To add a song
 router.post('/add', async (req,res)=>{
    const song =new songs({
         Title: req.body.title,
         Artist: req.body.artist,
         Genre: req.body.genre,
         Album: req.body.album,
    })
 try{
    const savedsong= await song.save();
    res.status(200).json(savedsong);
 }
 catch(err){
    res.json({message: err});
 }
});

//To get all songs
router.get('/view/all',async (req,res)=>{
    try{
        const viewsongs = await songs.find();
        res.json(viewsongs)
    }
    catch(error){
        res.json({message:err})
    }
})

//To get a song using id
router.get('/view/:songid',async(req,res)=>{
    try{
        const viewsong = await songs.findById(req.params.songid) 
        res.json(viewsong)
    }
    catch(error){
        res.send(error)
    }
})

//To delete a song
router.delete('/delete/:songid',async (req,res)=>{
    try{
    const deltedsong=await songs.remove({_id:req.params.songid})
    res.json(deltedsong)
    }
    catch(error){
        res.json({message:error})
    }
})

//To update a song
router.patch('/update/:songid',async (req,res)=>{
    try{
        const updatedsong= await songs.updateMany(
            {_id:req.params.songid},
            {$set:{
                Title:req.body.title,
                Artist:req.body.artist,
                Genre:req.body.genre,
                Album:req.body.album,
            },
        })
        res.status(200).json(updatedsong)
    }
    catch(error){
        res.json({message: error})
    }
})

//Filter song by Artist
router.get('/artist/:artistname',async (req,res)=>{
    const artistfound=await songs.find({Artist: req.params.artistname})
    try{
        res.json(artistfound)
    }
    catch(err)
    {
        res.json({message:err})
    }
})

//Filter song by Album
router.get('/album/:albumname',async(req,res)=>{
   const albumfound=await songs.find({Album: req.params.albumname})
   try{
       res.json(albumfound)
   }
   catch(err){
       res.json(err)
   }
})

//Filter song by Genre
router.get('/genre/:genretype',async(req,res)=>{
    const genrefound=await songs.find({Genre: req.params.genretype})
    try{
        res.json(genrefound)
    }
    catch(err)
    {
        res.json({message:err})
    }
})


module.exports= router;