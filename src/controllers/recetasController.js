'use strict'
const recetas = require('../models/recetas')



async function listarpostres (req = null){
    const res = await recetas().listarpostres()
    
    return res 
}

async function listarcomidas (req = null){
    const res = await recetas().listarcomidas()
    
    return res 
}

async function listarbebidas (req = null){
    const res = await recetas().listarbebidas()
    
    return res 
}




async function AddRecetas (req = null){
    
    const res = await recetas().AddRecetas(req)
    return res
}


async function ModReceta (req = null, id_receta){
    
    const res = await recetas().ModReceta(req.body,id_receta)
    return res
}

async function DeleteRecetas (id_receta){
    const res = await recetas().DeleteRecetas(id_receta)
    return res
}


module.exports = {

    listarpostres,
    listarcomidas,
    listarbebidas,
    AddRecetas,
    DeleteRecetas,
    ModReceta

}