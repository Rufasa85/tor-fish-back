const express = require('express');
const router = express.Router();
const {Tank,Fish,User} = require('../models');

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

module.exports = router;