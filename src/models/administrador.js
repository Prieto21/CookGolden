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


// AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR


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
      


    }

    
}

