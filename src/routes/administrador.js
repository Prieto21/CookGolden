const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/admin',async(req,res)=>{
    
    //const role = await pool.query('SELECT * FROM roles;');
    
    const nameperfil = await pool.query('SELECT * FROM nameperfil;');
    const useradmin = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 1;');
    const users = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 2;');
    res.render('Admin/Inicio', {
        useradmin,nameperfil,
        users,
        layout:"main_admin"
    });
});
router.get('/admin/recetas',async(req,res)=>{
    const back = await pool.query('SELECT * FROM fondo;');
    const comidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 1;');
    const bebidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 2;');
    const postres = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
    res.render('Admin/Recetas', {
        comidas,bebidas,postres,back,
        layout:"main_admin"
    });
});
router.get('/admin/nosotros',async(req,res)=>{
    const back = await pool.query('SELECT * FROM fondo;');
    const vision = await pool.query('SELECT * FROM vision;');
    const mision = await pool.query('SELECT * FROM mision;');
    res.render('Admin/Nosotros', {
        vision,mision,back,
        layout:"main_admin"
    });
});

router.get('/admin/aspectos',async(req,res)=>{
    
    const nombre = await pool.query('SELECT * FROM nombre;');
    const carrusel = await pool.query('SELECT * FROM carrusel;');
    const nameperfil = await pool.query('SELECT * FROM nameperfil;');
    const vision = await pool.query('SELECT * FROM vision;');
    const mision = await pool.query('SELECT * FROM mision;');
    const fondo = await pool.query('SELECT * FROM fondo;');
    res.render('Admin/Aspectos', {
        vision,mision,fondo,nombre,nameperfil,carrusel,
        layout:"main_admindos"
    });
});
router.get('/admin/nuevo',async(req,res)=>{
    //const role = await pool.query('SELECT * FROM roles;');
    const back = await pool.query('SELECT * FROM fondo;');
    const clasificacion = await pool.query('SELECT * FROM clasificacion;');
    res.render('Admin/Agregar', {
        clasificacion,back,
        layout:"main_admin"
    });
});
router.get('/admin/clases',async(req,res)=>{
    
    
    res.render('Admin/Clases', {
        layout:"main_admin"
        
    });
});


router.post('/mision', async(req,res)=>{
    
    const {mensaje} = req.body;
    const NewMision = {mensaje};
    await pool.query('INSERT INTO mision SET ?',[NewMision]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/fondo', async(req,res)=>{
    
    const {img} = req.body;
    const NewFondo = {img};
    await pool.query('INSERT INTO fondo SET ?',[NewFondo]);    
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/carrusel', async(req,res)=>{
    
    const {img} = req.body;
    const NewFondo = {img};
    await pool.query('INSERT INTO carrusel SET ?',[NewFondo]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/nombre', async(req,res)=>{
    
    const {nombre} = req.body;
    const NewNombre = {nombre};
    await pool.query('INSERT INTO nombre SET ?',[NewNombre]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/perfil', async(req,res)=>{
    
    const {nombre} = req.body;
    const NewNombre = {nombre};
    await pool.query('INSERT INTO nameperfil SET ?',[NewNombre]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/vision', async(req,res)=>{
    
    const {mensaje} = req.body;
    const NewVision = {mensaje};
    await pool.query('INSERT INTO vision SET ?',[NewVision]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/nuevarecet', async(req,res)=>{
    
    const {nombre,descripcion,img, id_clasif} = req.body;
    const NewReceta = {nombre,descripcion,img,id_clasif};
    await pool.query('INSERT INTO recetas SET ?',[NewReceta]);    
    res.redirect('/CookGolden/admin/nuevo');
});


router.get('/admin/comentarios',async(req,res)=>{
    const back = await pool.query('SELECT * FROM fondo;');
    const coment = await pool.query('SELECT * FROM usuarios u, comentarios c WHERE c.id_usuario = u.id_usuario ORDER BY id_comentario DESC;');
    res.render('Admin/Comentarios', {
        coment,back,
        layout:"main_admin"
    });
});
router.get('/admin/servicios', async(req,res)=>{
    const back = await pool.query('SELECT * FROM fondo;');
    const serv = await pool.query('SELECT * FROM servicios s, usuarios u WHERE s.id_usuario = u.id_usuario AND s.id_chat = 1;');
    res.render('Admin/Servicio', {
        serv,back,
        layout:"main_admin"
    });
    
router.post('/addser/admin', async(req,res)=>{
    
    const {id_chat,chat,id_usuario} = req.body;
    const NewChat = {id_chat,chat,id_usuario};
    await pool.query('INSERT INTO servicios SET ?',[NewChat]);    
    res.redirect('/CookGolden/Admin/servicios');
});
});







module.exports=router;