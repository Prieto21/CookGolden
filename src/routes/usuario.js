const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/user',(req,res)=>{
    
    res.render('Usuario/Inicio', {
        layout:"main_user"
    });
});
router.get('/user/perfil',(req,res)=>{
    
    res.render('Usuario/Perfil', {
        layout:"main_user"
    });
});
router.get('/user/favoritos',(req,res)=>{
    
    res.render('Usuario/Favoritos', {
        layout:"main_user"
    });
});
router.get('/user/comidas',(req,res)=>{
    
    res.render('Usuario/Comidas', {
        layout:"main_user"
    });
});
router.get('/user/bebidas',(req,res)=>{
    
    res.render('Usuario/Bebidas', {
        layout:"main_user"
    });
});
router.get('/user/postres',(req,res)=>{
    
    res.render('Usuario/Postres', {
        layout:"main_user"
    });
});
router.get('/user/nosotros',(req,res)=>{
    
    res.render('Usuario/Nosotros', {
        layout:"main_user"
    });
});

router.get('/user/clases',(req,res)=>{
    
    res.render('Usuario/Clases', {
        layout:"main_user"
    });
});

router.get('/user/comentarios',(req,res)=>{
    
    res.render('Usuario/Comentarios', {
        layout:"main_user"
    });
});
router.get('/user/servicios',(req,res)=>{
    
    res.render('Usuario/Servicio', {
        layout:"main_user"
    });
});







module.exports=router;