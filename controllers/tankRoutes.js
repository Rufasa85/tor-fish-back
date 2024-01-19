const express = require('express');
const router = express.Router();
const {Tank,Fish,User} = require('../models');
const withTokenAuth = require('../middleware/withTokenAuth');

router.get("/",(req,res)=>{
    Tank.findAll({
        include:[Fish]
    }).then(tanks=>{
        res.json(tanks)
    }).catch(err=>{
        console.log(err);;
        res.status(500).json({msg:"an error occurred",err});
    })
})
router.get("/:id",(req,res)=>{
    Tank.findByPk(req.params.id,{
        include:[Fish]
    }).then(oneTank=>{
        res.json(oneTank)
    }).catch(err=>{
        console.log(err);;
        res.status(500).json({msg:"an error occurred",err});
    })
})

router.post("/",withTokenAuth,(req,res)=>{
   Tank.create({
    name:req.body.name,
    UserId:req.tokenData.id
   }).then(oneTank=>{
    res.json(oneTank)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"an error occurred",err});
})
    
})

module.exports = router;