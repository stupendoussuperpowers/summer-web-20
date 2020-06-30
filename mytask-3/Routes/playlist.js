const express=require('express')
const router=express()
const playlist=require('../Models/playlist')

//To add a playlist
router.post('/add', async (req,res)=>{
    const myplaylist =new playlist({
        CreatedBy:req.body.createdby,
        Songs:req.body.songs,
        Title:req.body.title

    })
 try{
    const savedplaylist= await myplaylist.save();
    res.status(200).json(savedplaylist);
 }
 catch(err){
    res.json({message: err});
 }
});

//To get all playlist
router.get('/view/all',async (req,res)=>{
    try{
        const viewplaylist = await playlist.find();
        res.json(viewplaylist)
    }
    catch(error){
        res.json({message:err})
    }
})

//To get a song using id
router.get('/view/:playlistid',async(req,res)=>{
    try{
        const viewplaylist = await playlist.findById(req.params.playlistid) 
        res.json(viewplaylist)
    }
    catch(error){
        res.send(error)
    }
})

//To update a playlist
router.patch('/update/:playlistid',async (req,res)=>{
    try{
        const updatedplaylist= await playlist.updateOne(
            {_id:req.params.playlistid},
            {$set:{
                CreatedBy:req.body.createdby,
                Songs:req.body.songs,
                Title:req.body.title
            },
        })
        res.status(200).json(updatedplaylist)
    }
    catch(error){
        res.json({message: error})
    }
})

//To delete a playlist
router.delete('/delete/:playlistid',async (req,res)=>{
    try{
        const deletedplaylist=await playlist.remove({_id:req.params.playlistid})
        res.json(deletedplaylist)
    }
    catch(err){
        res.json({message:err})
    }
})



module.exports=router;