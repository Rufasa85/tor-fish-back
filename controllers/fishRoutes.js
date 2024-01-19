const express = require('express');
const router = express.Router();
const {User,Tank,Fish} = require('../models');
const withTokenAuth = require('../middleware/withTokenAuth');

router.post("/",withTokenAuth,(req,res)=>{
    Fish.create({
        name:req.body.name,
        length:req.body.length,
        color:req.body.color,
        TankId:req.body.tankId
    }).then(newFish=>{
        res.json(newFish)
    }).catch(err=>{
        console.log('err', err)
        res.status(500).json({msg:"err",err})
    })
})

module.exports = router;