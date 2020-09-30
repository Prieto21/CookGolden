const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/user',async(req,res)=>{
    const bienvenida = await pool.query('SELECT * FROM bienvenida;');
    const btnColors = await pool.query('SELECT * FROM colores c, botones b WHERE c.id_colores = b.id_color;');
    const carrusel = await pool.query('SELECT * FROM carrusel;');
    res.render('Usuario/Inicio', {
        carrusel,bienvenida,btnColors,
        layout:"main_user"
    });
});

router.post('/agregaruser', async(req,res)=>{
    
    const {nombre,apellido,usuario, contra, img, id_rol} = req.body;
    const NewUsuario = {nombre,apellido,usuario,contra, img, id_rol};
    await pool.query('INSERT INTO usuarios SET ?',[NewUsuario]);    
    res.redirect('/CookGolden/user');
});


router.post('/addcoment', async(req,res)=>{
    
    const {comentario,id_usuario} = req.body;
    const NewComent = {comentario,id_usuario};
    await pool.query('INSERT INTO comentarios SET ?',[NewComent]);    
    res.redirect('/CookGolden/user/comentarios');
});

router.post('/addfavorito', async(req,res)=>{
    
    const {id_receta,id_usuario} = req.body;
    const NewFav = {id_receta,id_usuario};
    await pool.query('INSERT INTO favoritos SET ?',[NewFav]);    
    res.redirect('/CookGolden/user/favoritos');
});
router.get('/user/perfil',async(req,res)=>{
    const nameperfil = await pool.query('SELECT * FROM nameperfil;');
    const user = await pool.query('SELECT * FROM usuarios u WHERE u.id_usuario=4;');
    res.render('Usuario/Perfil', {
        user,nameperfil,
        layout:"main_user"
    });
});
router.get('/user/favoritos',async(req,res)=>{
    const namefavoritos = await pool.query('SELECT * FROM namefavoritos;');
    const fav = await pool.query('SELECT f.id_favorito, r.nombre, r.descripcion, r.img FROM favoritos f, recetas r, usuarios u WHERE f.id_receta = r.id_receta AND f.id_usuario = u.id_usuario AND u.id_usuario = 4;');
    res.render('Usuario/Favoritos', {
        fav,namefavoritos,
        layout:"main_user"
    });
});
router.get('/user/comidas',async(req,res)=>{
    const comida = await pool.query('SELECT * FROM comida;');
    const comidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 1;');
    const user = await pool.query('SELECT * FROM usuarios u WHERE u.id_usuario=14;');
    res.render('Usuario/Comidas', {
        comidas,comida,
        user,
        layout:"main_user"
    });
});
router.get('/user/bebidas',async(req,res)=>{
    const bebida = await pool.query('SELECT * FROM bebida;');
    const bebidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 2;');
    res.render('Usuario/Bebidas', {
        bebidas,bebida,
        layout:"main_user"
    });
});
router.get('/user/postres',async(req,res)=>{
    const postre = await pool.query('SELECT * FROM postre;');
    const postres = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
    res.render('Usuario/Postres', {
        postres,postre,
        layout:"main_user"
    });
});




router.get('/user/nosotros',async(req,res)=>{
    const vision = await pool.query('SELECT * FROM vision;');
    const mision = await pool.query('SELECT * FROM mision;');
    res.render('Usuario/Nosotros', {
        vision,mision,
        layout:"main_user"
    });
});

router.get('/user/clases',async(req,res)=>{
    const clases = await pool.query('SELECT * FROM clases;');
    res.render('Usuario/Clases', {
        clases,
        layout:"main_user"
    });
});

router.get('/user/comentarios',async(req,res)=>{
    const coment = await pool.query('SELECT * FROM usuarios u, comentarios c WHERE c.id_usuario = u.id_usuario ORDER BY id_comentario DESC;');
    res.render('Usuario/Comentarios', {
coment,
        layout:"main_user"
    });
});
router.get('/user/servicios',async(req,res)=>{
    const serv = await pool.query('SELECT * FROM servicios s, usuarios u WHERE s.id_usuario = u.id_usuario AND s.id_chat = 1;');
    res.render('Usuario/Servicio', {
serv,
        layout:"main_user"
    });
});

router.post('/addser', async(req,res)=>{
    
    const {id_chat,chat,id_usuario} = req.body;
    const NewChat = {id_chat,chat,id_usuario};
    await pool.query('INSERT INTO servicios SET ?',[NewChat]);    
    res.redirect('/CookGolden/user/servicios');
});

//Eliminar


router.get('/favoritos/:id_favorito',async(req,res)=>{
    const {id_favorito} = req.params;
    await pool.query('DELETE FROM favoritos WHERE id_favorito = ?',[id_favorito]);    
       
    res.redirect('/CookGolden/user/favoritos');
});

//MODIFICAR 
    
router.post('/user/perfil/modificar/:id_usuario', async(req,res)=>{
    const {id_usuario} = req.params;
    const {nombre, apellido, usuario, contra, img, id_rol} = req.body;
    const NewUsuario = {nombre, apellido, usuario, contra, img, id_rol};
    await pool.query('UPDATE usuarios SET ? WHERE id_usuario = ?',[NewUsuario, id_usuario]);    
    res.redirect('/CookGolden/user/perfil');
});







module.exports=router;