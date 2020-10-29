'use strict'
const usuariosweb = require('../models/usuariosweb')

//LISTAR

async function listarbienvenida (req = null){
    const res = await usuariosweb().listarbienvenida()
    
    return res 
}
async function listarbtn (req = null){
    const res = await usuariosweb().listarbtn()
    
    return res 
}
async function listarcarrusel (req = null){
    const res = await usuariosweb().listarcarrusel()
    
    return res 
}
async function listarnombreperfil (req = null){
    const res = await usuariosweb().listarnombreperfil()
    
    return res 
}
async function listaruser (req = null){
    const res = await usuariosweb().listaruser()
    
    return res 
}
async function listarnamefavoritos (req = null){
    const res = await usuariosweb().listarnamefavoritos()
    
    return res 
}
async function listarfav (req = null){
    const res = await usuariosweb().listarfav()
    
    return res 
}

async function listarcomidanombre (req = null){
    const res = await usuariosweb().listarcomidanombre()
    
    return res 
}

async function listarcomidas (req = null){
    const res = await usuariosweb().listarcomidas()
    
    return res 
}
async function listarnombrebebida (req = null){
    const res = await usuariosweb().listarnombrebebida()
    
    return res 
}
async function listarbebidas (req = null){
    const res = await usuariosweb().listarbebidas()
    
    return res 
}

async function listarnombrepostre (req = null){
    const res = await usuariosweb().listarnombrepostre()
    
    return res 
}

async function listarpostres (req = null){
    const res = await usuariosweb().listarpostres()
    
    return res 
}

async function listarvision (req = null){
    const res = await usuariosweb().listarvision()
    
    return res 
}
async function listarmision (req = null){
    const res = await usuariosweb().listarmision()
    
    return res 
}
async function listarclases (req = null){
    const res = await usuariosweb().listarclases()
    
    return res 
}
async function listarcoment (req = null){
    const res = await usuariosweb().listarcoment()
    
    return res 
}
async function listarserv (req = null){
    const res = await usuariosweb().listarserv()
    
    return res 
}

 //AGREGAR


 async function AddUsuario (req = null){
    
    const res = await usuariosweb().AddUsuario(req)
    return res
}


async function AddComent (req = null){
    
    const res = await usuariosweb().AddComent(req)
    return res
}

async function AddFavorito (req = null){
    
    const res = await usuariosweb().AddFavorito(req)
    return res
}

async function AddChat (req = null){
    
    const res = await usuariosweb().AddChat(req)
    return res
}





    //ELIMINAR

    
async function DeleteFavoritos (id_favorito){
    const res = await usuariosweb().DeleteFavoritos(id_favorito)
    return res
}

    //MODIFCAR



module.exports = {

    listarbienvenida,
    listarcarrusel,
    listarbtn,
    listarnombreperfil,
    listaruser,
    listarnamefavoritos,
    listarfav,
    listarcomidanombre,
    listarcomidas,
    listarnombrebebida,
    listarbebidas,
    listarnombrepostre,
    listarpostres,
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