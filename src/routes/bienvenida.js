const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/',(req,res)=>{
    
    res.render('Inicio/Bienvenida');
});
router.get('/login',(req,res)=>{
    
    res.render('Inicio/Login');
});
router.get('/registro',(req,res)=>{
    
    res.render('Inicio/Registro');
});



module.exports=router;