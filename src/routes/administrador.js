const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/admin', async (req, res) => {

    //const role = await pool.query('SELECT * FROM roles;');

    const nameperfil = await pool.query('SELECT * FROM nameperfil;');
    const useradmin = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 1;');
    const users = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 2;');
    res.render('Admin/Inicio', {
        useradmin, nameperfil,
        users,
        layout: "main_admin"
    });
});
router.get('/admin/recetas', async (req, res) => {

    const receta = await pool.query('SELECT * FROM receta;');
    const comidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 1;');
    const bebidas = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 2;');
    const postres = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
    res.render('Admin/Recetas', {
        comidas, bebidas, postres, receta,
        layout: "main_admin"
    });
});
router.get('/admin/nosotros', async (req, res) => {
    const back = await pool.query('SELECT * FROM fondo;');
    const vision = await pool.query('SELECT * FROM vision;');
    const mision = await pool.query('SELECT * FROM mision;');
    res.render('Admin/Nosotros', {
        vision, mision, back,
        layout: "main_admin"
    });
});

router.get('/admin/aspectos', async (req, res) => {

    const nombre = await pool.query('SELECT * FROM nombre;');
    const carrusel = await pool.query('SELECT * FROM carrusel;')
    const namefavoritos = await pool.query('SELECT * FROM namefavoritos;');
    const bienvenida = await pool.query('SELECT * FROM bienvenida;');
    const btnColors = await pool.query('SELECT * FROM colores c, botones b WHERE c.id_colores = b.id_color;');
    const colores = await pool.query('SELECT * FROM colores;');
    const receta = await pool.query('SELECT * FROM receta;');
    const comida = await pool.query('SELECT * FROM comida;');
    const bebida = await pool.query('SELECT * FROM bebida;');
    const postre = await pool.query('SELECT * FROM postre;');
    const nameperfil = await pool.query('SELECT * FROM nameperfil;');
    const vision = await pool.query('SELECT * FROM vision;');
    const mision = await pool.query('SELECT * FROM mision;');
    const fondo = await pool.query('SELECT * FROM fondo;');
    res.render('Admin/Aspectos', {
        vision, mision, fondo, nombre, nameperfil, carrusel, receta, comida, bebida, postre, namefavoritos, bienvenida,
        colores, btnColors,
        layout: "main_admindos"
    });
});
router.get('/admin/nuevo', async (req, res) => {
    //const role = await pool.query('SELECT * FROM roles;');
    const back = await pool.query('SELECT * FROM fondo;');
    const clasificacion = await pool.query('SELECT * FROM clasificacion;');
    res.render('Admin/Agregar', {
        clasificacion, back,
        layout: "main_admin"
    });
});
router.get('/admin/clases', async (req, res) => {

    const clases = await pool.query('SELECT * FROM clases;');
    res.render('Admin/Clases', {
        clases,
        layout: "main_admin"

    });
});


router.post('/mision', async (req, res) => {

    const { mensaje } = req.body;
    const NewMision = { mensaje };
    await pool.query('INSERT INTO mision SET ?', [NewMision]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/clases', async (req, res) => {

    const { link } = req.body;
    const NewVideo = { link };
    await pool.query('INSERT INTO clases SET ?', [NewVideo]);
    res.redirect('/CookGolden/admin/clases');
});
router.post('/btnColors', async (req, res) => {

    const { id_color } = req.body;
    const BtnColor = { id_color };
    await pool.query('INSERT INTO botones SET ?', [BtnColor]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/colores', async (req, res) => {

    const { color } = req.body;
    const NewColor = { color };
    await pool.query('INSERT INTO colores SET ?', [NewColor]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/bienvenida', async (req, res) => {

    const { mensaje } = req.body;
    const NewBienvenida = { mensaje };
    await pool.query('INSERT INTO bienvenida SET ?', [NewBienvenida]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/receta', async (req, res) => {

    const { nombre } = req.body;
    const TituloReceta = { nombre };
    await pool.query('INSERT INTO receta SET ?', [TituloReceta]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/namefavoritos', async (req, res) => {

    const { nombre } = req.body;
    const TituloFavoritos = { nombre };
    await pool.query('INSERT INTO namefavoritos SET ?', [TituloFavoritos]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/comida', async (req, res) => {

    const { nombre } = req.body;
    const TituloComida = { nombre };
    await pool.query('INSERT INTO comida SET ?', [TituloComida]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/bebida', async (req, res) => {

    const { nombre } = req.body;
    const Titulobebida = { nombre };
    await pool.query('INSERT INTO bebida SET ?', [Titulobebida]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/postre', async (req, res) => {

    const { nombre } = req.body;
    const TituloPostre = { nombre };
    await pool.query('INSERT INTO postre SET ?', [TituloPostre]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/fondo', async (req, res) => {

    const { img } = req.body;
    const NewFondo = { img };
    await pool.query('INSERT INTO fondo SET ?', [NewFondo]);
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/carrusel', async (req, res) => {

    const { img } = req.body;
    const NewFondo = { img };
    await pool.query('INSERT INTO carrusel SET ?', [NewFondo]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/nombre', async (req, res) => {

    const { nombre } = req.body;
    const NewNombre = { nombre };
    await pool.query('INSERT INTO nombre SET ?', [NewNombre]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/perfil', async (req, res) => {

    const { nombre } = req.body;
    const NewNombre = { nombre };
    await pool.query('INSERT INTO nameperfil SET ?', [NewNombre]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/vision', async (req, res) => {

    const { mensaje } = req.body;
    const NewVision = { mensaje };
    await pool.query('INSERT INTO vision SET ?', [NewVision]);
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/nuevarecet', async (req, res) => {

    const { nombre, descripcion, img, id_clasif } = req.body;
    const NewReceta = { nombre, descripcion, img, id_clasif };
    await pool.query('INSERT INTO recetas SET ?', [NewReceta]);
    res.redirect('/CookGolden/admin/nuevo');
});


router.get('/admin/comentarios', async (req, res) => {
    const back = await pool.query('SELECT * FROM fondo;');
    const coment = await pool.query('SELECT * FROM usuarios u, comentarios c WHERE c.id_usuario = u.id_usuario ORDER BY id_comentario DESC;');
    res.render('Admin/Comentarios', {
        coment, back,
        layout: "main_admin"
    });
});
router.get('/admin/servicios', async (req, res) => {
    const back = await pool.query('SELECT * FROM fondo;');
    const serv = await pool.query('SELECT * FROM servicios s, usuarios u WHERE s.id_usuario = u.id_usuario AND s.id_chat = 1;');
    res.render('Admin/Servicio', {
        serv, back,
        layout: "main_admin"
    });
});


router.post('/addser/admin', async (req, res) => {

    const { id_chat, chat, id_usuario } = req.body;
    const NewChat = { id_chat, chat, id_usuario };
    await pool.query('INSERT INTO servicios SET ?', [NewChat]);
    res.redirect('/CookGolden/Admin/servicios');
});

//Eliminar


router.get('/userdelete/:id_usuario',async(req,res)=>{
    const {id_usuario} = req.params;
    await pool.query('DELETE FROM usuarios WHERE id_usuario = ?',[id_usuario]);    
       
    res.redirect('/CookGolden/admin');
});

router.get('/recetdelet/:id_receta',async(req,res)=>{
    const {id_receta} = req.params;
    await pool.query('DELETE FROM recetas WHERE id_receta = ?',[id_receta]);    
       
    res.redirect('/CookGolden/admin/recetas');
});

router.get('/fondodelete/:id_fondo',async(req,res)=>{
    const {id_fondo} = req.params;
    await pool.query('DELETE FROM fondo WHERE id_fondo = ?',[id_fondo]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/carruseldelete/:id_carrusel',async(req,res)=>{
    const {id_carrusel} = req.params;
    await pool.query('DELETE FROM carrusel WHERE id_carrusel = ?',[id_carrusel]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});


router.get('/perfildelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM nameperfil WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/pagdelete/:id_nombre',async(req,res)=>{
    const {id_nombre} = req.params;
    await pool.query('DELETE FROM nombre WHERE id_nombre = ?',[id_nombre]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});


router.get('/namerecet/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM receta WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/comidadelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM comida WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/bebidadelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM bebida WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/postredelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM postre WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/welcomedelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM bienvenida WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/coloresdelete/:id_colores',async(req,res)=>{
    const {id_colores} = req.params;
    await pool.query('DELETE FROM colores WHERE id_colores = ?',[id_colores]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});
router.get('/btncolorsdelete/:id_botones',async(req,res)=>{
    const {id_botones} = req.params;
    await pool.query('DELETE FROM botones WHERE id_botones = ?',[id_botones]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});
router.get('/namefavdelete/:id',async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM namefavoritos WHERE id = ?',[id]);    
       
    res.redirect('/CookGolden/admin/aspectos');
});

router.get('/clasesdelete/:id_clases',async(req,res)=>{
    const {id_clases} = req.params;
    await pool.query('DELETE FROM clases WHERE id_clases = ?',[id_clases]);    
       
    res.redirect('/CookGolden/admin/clases');
});


router.get('/comentdelete/:id_comentario',async(req,res)=>{
    const {id_comentario} = req.params;
    await pool.query('DELETE FROM comentarios WHERE id_comentario = ?',[id_comentario]);    
       
    res.redirect('/CookGolden/admin/comentarios');
});


router.get('/chatdelete',async(req,res)=>{
    
    await pool.query('DELETE FROM servicios');    
       
    res.redirect('/CookGolden/admin/servicios');
});


router.get('/misiondelete/:id_mision',async(req,res)=>{
    const {id_mision} = req.params;
    await pool.query('DELETE FROM mision WHERE id_mision = ?',[id_mision]);    
       
    res.redirect('/CookGolden/admin/nosotros');
});


router.get('/visiondelete/:id_vision',async(req,res)=>{
    const {id_vision} = req.params;
    await pool.query('DELETE FROM vision WHERE id_vision = ?',[id_vision]);    
       
    res.redirect('/CookGolden/admin/nosotros');
});


//MODIFICAR

 
router.post('/admin/modificar/:id_usuario', async(req,res)=>{
    const {id_usuario} = req.params;
    const {nombre, apellido, usuario, contra, img, id_rol} = req.body;
    const NewUsuario = {nombre, apellido, usuario, contra, img, id_rol};
    await pool.query('UPDATE usuarios SET ? WHERE id_usuario = ?',[NewUsuario, id_usuario]);    
    res.redirect('/CookGolden/admin');
});


router.post('/admin/recetas/modificar/:id_receta', async(req,res)=>{
    const {id_receta} = req.params;
    const {nombre, descripcion, img, id_clasif} = req.body;
    const NewUsuario = {nombre, descripcion, img, id_clasif};
    await pool.query('UPDATE recetas SET ? WHERE id_receta = ?',[NewUsuario, id_receta]);    
    res.redirect('/CookGolden/admin/recetas');
});


router.post('/admin/clases/modificar/:id_clases', async(req,res)=>{
    const {id_clases} = req.params;
    const {link} = req.body;
    const NewUsuario = {link};
    await pool.query('UPDATE clases SET ? WHERE id_clases = ?',[NewUsuario, id_clases]);    
    res.redirect('/CookGolden/admin/clases');
});


router.post('/admin/vision/modificar/:id_vision', async(req,res)=>{
    const {id_vision} = req.params;
    const {mensaje} = req.body;
    const NewUsuario = {mensaje};
    await pool.query('UPDATE vision SET ? WHERE id_vision = ?',[NewUsuario, id_vision]);    
    res.redirect('/CookGolden/admin/nosotros');
});

router.post('/admin/mision/modificar/:id_mision', async(req,res)=>{
    const {id_mision} = req.params;
    const {mensaje} = req.body;
    const NewUsuario = {mensaje};
    await pool.query('UPDATE mision SET ? WHERE id_mision = ?',[NewUsuario, id_mision]);    
    res.redirect('/CookGolden/admin/nosotros');
});

router.post('/admin/fondo/modificar/:id_fondo', async(req,res)=>{
    const {id_fondo} = req.params;
    const {img} = req.body;
    const NewUsuario = {img};
    await pool.query('UPDATE fondo SET ? WHERE id_fondo = ?',[NewUsuario, id_fondo]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/admin/carrusel/modificar/:id_carrusel', async(req,res)=>{
    const {id_carrusel} = req.params;
    const {img} = req.body;
    const NewUsuario = {img};
    await pool.query('UPDATE carrusel SET ? WHERE id_carrusel = ?',[NewUsuario, id_carrusel]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/admin/nameperfil/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE nameperfil SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/admin/namepagina/modificar/:id_nombre', async(req,res)=>{
    const {id_nombre} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE nombre SET ? WHERE id_nombre = ?',[NewUsuario, id_nombre]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/admin/namerece/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE receta SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});


router.post('/admin/comida/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE comida SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});

router.post('/admin/bebida/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE bebida SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});


router.post('/admin/postre/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE postre SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});


router.post('/admin/favo/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const NewUsuario = {nombre};
    await pool.query('UPDATE namefavoritos SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});
router.post('/admin/bienvenida/modificar/:id', async(req,res)=>{
    const {id} = req.params;
    const {mensaje} = req.body;
    const NewUsuario = {mensaje};
    await pool.query('UPDATE bienvenida SET ? WHERE id = ?',[NewUsuario, id]);    
    res.redirect('/CookGolden/admin/aspectos');
});









module.exports = router;