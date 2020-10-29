'use strict'


const pool = require('../database');


module.exports = function () {

    //LISTAR

    async function listarbienvenida(req) {
        const data = await pool.query('SELECT * FROM bienvenida;');
        return data

    }
    async function listarbtn(req) {
        const data = await pool.query('SELECT * FROM colores c, botones b WHERE c.id_colores = b.id_color;');
        return data

    }
    async function listarcarrusel(req) {
        const data = await pool.query('SELECT * FROM carrusel;');
        return data

    }
    async function listarnombreperfil(req) {
        const data = await pool.query('SELECT * FROM nameperfil;');
        return data

    }
    async function listaruser(req) {
        const data = await pool.query('SELECT * FROM usuarios u WHERE u.id_usuario=4;');
        return data

    }
    async function listarnamefavoritos(req) {
        const data = await pool.query('SELECT * FROM namefavoritos;');
        return data

    }
    async function listarfav(req) {
        const data = await pool.query('SELECT f.id_favorito, r.nombre, r.descripcion, r.img FROM favoritos f, recetas r, usuarios u WHERE f.id_receta = r.id_receta AND f.id_usuario = u.id_usuario AND u.id_usuario = 4;');
        return data

    }

    async function listarcomidanombre(req) {
        const data = await pool.query('SELECT * FROM comida;');
        return data

    }
    
    async function listarcomidas(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 1;');
        return data

    }
    async function listarnombrebebida(req) {
        const data = await pool.query('SELECT * FROM bebida;');
        return data

    }
    async function listarbebidas(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 2;');
        return data

    }

    async function listarnombrepostre(req) {
        const data = await pool.query('SELECT * FROM postre;');
        return data

    }

    async function listarpostres(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
        return data

    }
    
    async function listarvision(req) {
        const data = await pool.query('SELECT * FROM vision;');
        return data

    }
    
    async function listarmision(req) {
        const data = await pool.query('SELECT * FROM mision;');
        return data

    }
    async function listarclases(req) {
        const data = await pool.query('SELECT * FROM clases;');
        return data

    }
    async function listarcoment(req) {
        const data = await pool.query('SELECT * FROM usuarios u, comentarios c WHERE c.id_usuario = u.id_usuario ORDER BY id_comentario DESC;');
        return data

    }
    async function listarserv(req) {
        const data = await pool.query('SELECT * FROM servicios s, usuarios u WHERE s.id_usuario = u.id_usuario AND s.id_chat = 1;');
        return data

    }
    //AGREGAR


    async function AddUsuario(req,res){
        await pool.query('INSERT INTO usuarios SET ?',[req.body]);
        
    }
    
    async function AddComent(req,res){
        await pool.query('INSERT INTO comentarios SET ?',[req.body]);
        
    }
    async function AddFavorito(req,res){
        await pool.query('INSERT INTO favoritos SET ?',[req.body]);
        
    }
    async function AddChat(req,res){
        await pool.query('INSERT INTO servicios SET ?',[req.body]);
        
    }





    //ELIMINAR
    async function DeleteFavoritos (id_favorito){
        await pool.query('DELETE FROM favoritos WHERE id_favorito = ?',[id_favorito])
        return true;
    }

    //MODIFCAR
    
    return {
        listarbienvenida,
        listarbtn,
        listarcarrusel,
        listarnombreperfil,
        listaruser,
        listarfav,
        listarnamefavoritos,
        listarcomidanombre,
        listarcomidas,
        listarbebidas,
        listarnombrebebida,
        listarpostres,
        listarnombrepostre,
        listarvision,
        listarmision,
        listarclases,
        listarcoment,
        listarserv,
        DeleteFavoritos,
        AddUsuario,
        AddComent,
        AddFavorito,
        AddChat,

      


    }

    
}

