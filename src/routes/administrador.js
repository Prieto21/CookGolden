const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/admin',(req,res)=>{
    
    res.render('Admin/Inicio', {
        layout:"main_admin"
    });
});
router.get('/admin/recetas',(req,res)=>{
    
    res.render('Admin/Recetas', {
        layout:"main_admin"
    });
});
router.get('/admin/nosotros',(req,res)=>{
    
    res.render('Admin/Nosotros', {
        layout:"main_admin"
    });
});
router.get('/admin/nuevo',(req,res)=>{
    
    res.render('Admin/Agregar', {
        layout:"main_admin"
    });
});



router.get('/admin/comentarios',(req,res)=>{
    
    res.render('Admin/Comentarios', {
        layout:"main_admin"
    });
});
router.get('/admin/servicios',(req,res)=>{
    
    res.render('Admin/Servicio', {
        layout:"main_admin"
    });
});







module.exports=router;