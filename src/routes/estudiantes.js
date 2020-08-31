const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/addes',(req,res)=>{
    
    res.render('estudiantes/add');
});
router.get('/deletees',(req,res)=>{
    
    res.render('estudiantes/delete');
});
router.get('/modides',(req,res)=>{
    
    res.render('estudiantes/modificar');
});
router.get('/listares',async (req,res)=>{
    const estudiantestodos = await pool.query('SELECT * FROM estudiantes');
    res.render('estudiantes/listar',{estudiantestodos});
});


module.exports=router;