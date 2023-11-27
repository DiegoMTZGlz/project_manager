const express=require('express');
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const config=require('config');

function home(req, res, next){
    res.render('index', {title: 'Express'});
}
function login(req, res, next){
    const username=req.body.username;
    const password=req.body.password;
    const JwtKey=config.get("secret.key");
    User.findOne({"_username":username}).then(user => {
        if(user){
            bcrypt.hash(password, user.salt, (err, hash)=>{
                if(err){
                    res.status(403).json({
                        msg:res.__('login.wrong'),
                        obj:err
                    });  
                }
                if(hash===user.password){
                    res.status(200).json({
                        msg:res.__('login.ok'), 
                        obj:jwt.sign({data:user.data, exp: Math.floor(Date.now()/1000)+180}, JwtKey)
                    })    
                }
                else{
                    res.status(403).json({
                        msg:res.__('login.wrong'),
                        obj:null
                    });
                }
            });
        }else{
            res.status(403).json({
                msg:res.__('login.wrong'),
                obj:null
            });
        }
    }).catch(ex => res.status(403).json({
        msg:res.__('login.wrong'),
        obj:ex
    }));
}

module.exports={home,login}