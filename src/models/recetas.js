'use strict'


const pool = require('../database');


module.exports = function () {

    async function listarpostres(req) {
        const data = await pool.query('SELECT * FROM recetas r, clasificacion c WHERE r.id_clasif = c.id_clasif AND r.id_clasif = 3;');
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




    async function AddRecetas(req,res){
        await pool.query('INSERT INTO recetas SET ?',[req.body]);
        
    }
    
    async function ModReceta(req,id_receta){
        await pool.query('UPDATE recetas SET ? WHERE id_receta = ?',[req.body,id_receta])
        return true;
    }

    async function DeleteRecetas (id_receta){
        await pool.query('DELETE FROM recetas WHERE id_receta = ?',[id_receta])
        return true;
    }



    return {
        listarpostres,
        listarcomidas,
        listarbebidas,
        AddRecetas,
        ModReceta,
        DeleteRecetas


    }

    
}







