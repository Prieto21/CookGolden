const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/',async(req,res)=>{
    const nombre = await pool.query('SELECT * FROM nombre;');
    res.render('Inicio/Bienvenida', {
        nombre,
    });
});


router.get('/login',(req,res)=>{
    
    res.render('Inicio/Login');
});
router.get('/registro',(req,res)=>{
    
    res.render('Inicio/Registro');
});



module.exports=router;