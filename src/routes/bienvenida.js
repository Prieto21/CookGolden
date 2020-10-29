const express = require('express');
const router=express.Router();
//const pool = require('../database');
const bienvenidaController = require('../controllers/bienvenidaController');

//LISTAR
router.get('/',async(req,res)=>{
    //const nombre = await pool.query('SELECT * FROM nombre;');
    const nombre = await bienvenidaController.listar(req);
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