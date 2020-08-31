const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/addusu',(req,res)=>{
    
    //res.send('Agregar Usuarios');
    res.render('usuarios/add');
});
router.get('/deleteusu',(req,res)=>{
    
    res.render('usuarios/delete');
});
router.get('/modiusu',(req,res)=>{
    
    res.render('usuarios/modificar');
});

router.get('/listarusu',async (req,res)=>{
    const usuariostodos = await pool.query('SELECT * FROM usuario');
    res.render('usuarios/listar',{usuariostodos});
});
module.exports=router;