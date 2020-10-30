'use strict'


const pool = require('../database');


module.exports = function () {


//LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR
    async function listarnameperfil(req) {
        const data = await pool.query('SELECT * FROM nameperfil;');
        return data

    }
    async function listaruseradmin(req) {
        const data = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 1;');
        return data

    }
    async function listarusers(req) {
        const data = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 2;');
        return data

    }
    async function listarreceta(req) {
        const data = await pool.query('SELECT * FROM receta;');
        return data

    }
    async function listarcomidas(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 1;');
        return data

    }
    async function listarbebidas(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 2;');
        return data

    }
    async function listarpostres(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
        return data

    }

    async function listarclasificacion(req) {
        const data = await pool.query('SELECT * FROM clasificacion;');
        return data

    }
    async function listarcolores(req) {
        const data = await pool.query('SELECT * FROM colores;');
        return data

    }
    async function listarfondo(req) {
        const data = await pool.query('SELECT * FROM fondo;');
        return data

    }



//ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR
async function DeleteUsuarios (id_usuario){
    await pool.query('DELETE FROM usuarios WHERE id_usuario = ?',[id_usuario])
    return true;
}
async function DeleteRecetas (id_receta){
    await pool.query('DELETE FROM recetas WHERE id_receta = ?',[id_receta])
    return true;
}

async function DeleteFondo (id_fondo){
    
    await pool.query('DELETE FROM fondo WHERE id_fondo = ?',[id_fondo]);    
    return true;
}
async function DeleteCarrusel (id_carrusel){
    
    await pool.query('DELETE FROM carrusel WHERE id_carrusel = ?',[id_carrusel]);    
    return true;
}
async function Deletenameperfil (id){
    
    await pool.query('DELETE FROM nameperfil WHERE id = ?',[id]);  
    return true;
}


async function Deletenamepagina (id_nombre){
    
    await pool.query('DELETE FROM nombre WHERE id_nombre = ?',[id_nombre]); 
    return true;
}

async function DeletenameReceta (id){
    
    await pool.query('DELETE FROM receta WHERE id = ?',[id]); 
    return true;
}
async function DeletenameComida (id){
    
    await pool.query('DELETE FROM comida WHERE id = ?',[id]);    
    return true;
}
async function DeletenameBebida (id){
    
    await pool.query('DELETE FROM bebida WHERE id = ?',[id]); 
    return true;
}
async function DeletenamePostre (id){
    
    await pool.query('DELETE FROM postre WHERE id = ?',[id]);    
    return true;
}

async function DeleteBienvenida (id){
    await pool.query('DELETE FROM bienvenida WHERE id = ?',[id]);   
       
    return true;
}

async function DeleteColores (id_colores){
    await pool.query('DELETE FROM colores WHERE id_colores = ?',[id_colores]);    
       
    return true;
}
async function DeleteBotones (id_botones){
    await pool.query('DELETE FROM botones WHERE id_botones = ?',[id_botones]);       
       
    return true;
}
async function DeletenameFavorito (id){
    await pool.query('DELETE FROM namefavoritos WHERE id = ?',[id]);    
       
    return true;
}
async function DeleteClases (id_clases){
    await pool.query('DELETE FROM clases WHERE id_clases = ?',[id_clases]);  
       
    return true;
}
async function DeleteComent (id_comentario){
    await pool.query('DELETE FROM comentarios WHERE id_comentario = ?',[id_comentario]); 
       
    return true;
}
async function DeleteChat (){
    await pool.query('DELETE FROM servicios');  
       
    return true;
}
async function DeleteVision (id_vision){
    await pool.query('DELETE FROM vision WHERE id_vision = ?',[id_vision]);
       
    return true;
}
async function DeleteMision (id_mision){
    await pool.query('DELETE FROM mision WHERE id_mision = ?',[id_mision]);  
       
    return true;
}
// AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR

async function AddRecetas(req,res){
    await pool.query('INSERT INTO recetas SET ?',[req.body]);
    
}
async function AddClases(req,res){
    await pool.query('INSERT INTO clases SET ?',[req.body]);
    
}

async function AddMision(req,res){
    await pool.query('INSERT INTO mision SET ?',[req.body]);
    
}
async function AddVision(req,res){
    await pool.query('INSERT INTO vision SET ?',[req.body]);
    
}
async function AddBoton(req,res){
    await pool.query('INSERT INTO botones SET ?',[req.body]);
    
}
async function AddColores(req,res){
    await pool.query('INSERT INTO colores SET ?',[req.body]);
    
}
async function AddBienvenida(req,res){
    await pool.query('INSERT INTO bienvenida SET ?',[req.body]);
    
}

async function Addnamereceta(req,res){
    await pool.query('INSERT INTO receta SET ?',[req.body]);
    
}
async function Addnamefavorito(req,res){
    await pool.query('INSERT INTO namefavoritos SET ?',[req.body]);
    
}
async function Addnamecomida(req,res){
    await pool.query('INSERT INTO comida SET ?',[req.body]);
    
}
async function Addnamebebida(req,res){
    await pool.query('INSERT INTO bebida SET ?',[req.body]);
    
}
async function Addnamepostre(req,res){
    await pool.query('INSERT INTO postre SET ?',[req.body]);
    
}
async function Addfondo(req,res){
    await pool.query('INSERT INTO fondo SET ?',[req.body]);
    
}
async function Addcarrusel(req,res){
    await pool.query('INSERT INTO carrusel SET ?',[req.body]);
    
}
async function Addnamepagina(req,res){
    await pool.query('INSERT INTO nombre SET ?',[req.body]);
    
}
async function Addnameperfil(req,res){
    await pool.query('INSERT INTO nameperfil SET ?',[req.body]);
    
}

// MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR





    
    return {
        listarnameperfil,
    listaruseradmin,
    listarusers,
    listarreceta,
    listarcomidas,
    listarbebidas,
    listarpostres,
    listarclasificacion,
    listarcolores,
    listarfondo,
    DeleteUsuarios,
    DeleteRecetas,
    DeleteFondo,
    DeleteCarrusel,
    Deletenameperfil,
    Deletenamepagina,
    DeletenameReceta,
    DeletenameComida,
    DeletenameBebida,
    DeletenamePostre,
    DeleteBienvenida,
    DeleteColores,
    DeleteBotones,
    DeletenameFavorito,
    DeleteClases,
    DeleteComent,
    DeleteChat,
    DeleteVision,
    DeleteMision,
    AddRecetas,
    AddClases,
    AddMision,
    AddVision,
    AddBoton,
    AddColores,
    AddBienvenida,
    Addnamereceta,
    Addnamefavorito,
    Addnamecomida,
    Addnamebebida,
    Addnamepostre,
    Addfondo,
    Addcarrusel,
    Addnamepagina,
    Addnameperfil,

    }

    
}

