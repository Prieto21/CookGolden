'use strict'
const administrador = require('../models/administrador')

//LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR LISTAR

async function listarnameperfil (req = null){
    const res = await administrador().listarnameperfil()
    
    return res 
}
async function listaruseradmin (req = null){
    const res = await administrador().listaruseradmin()
    
    return res 
}
async function listarusers (req = null){
    const res = await administrador().listarusers()
    
    return res 
}


async function listarreceta (req = null){
    const res = await administrador().listarreceta()
    
    return res 
}
async function listarcomidas (req = null){
    const res = await administrador().listarcomidas()
    
    return res 
}
async function listarbebidas (req = null){
    const res = await administrador().listarbebidas()
    
    return res 
}
async function listarpostres (req = null){
    const res = await administrador().listarpostres()
    
    return res 
}

async function listarclasificacion (req = null){
    const res = await administrador().listarclasificacion()
    
    return res 
}


async function listarcolores (req = null){
    const res = await administrador().listarcolores()
    
    return res 
}
async function listarfondo (req = null){
    const res = await administrador().listarfondo()
    
    return res 
}


//ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR ELIMINAR


// AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR


// MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR MODIFICAR



module.exports = {

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