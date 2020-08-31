const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/adddoc',(req,res)=>{
    
    res.render('docentes/add');
});
router.get('/deletedoc',(req,res)=>{
    
    res.render('docentes/delete');
});
router.get('/modidoc',(req,res)=>{
    
    res.render('docentes/modificar');
});
router.get('/listardoc',async (req,res)=>{
    const docentestodos = await pool.query('SELECT * FROM docentes');
    res.render('docentes/listar',{docentestodos});
});


module.exports=router;