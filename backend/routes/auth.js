const express = require('express');
const router= express.Router();
const User= require('../models/User')
const {body, validationResult} = require('express-validator')

//

router.post ('/createUser',[
    body('name').isLength({min:3}),
    body('email').isEmail({}),
    body('password').isLength({min:5})
],async(req,res)=>{
    //return error or continue
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    let user= await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"Sorry email exits"})
    }

    user= await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
    }).then(user=>res.json(user))

    
})

module.exports= router