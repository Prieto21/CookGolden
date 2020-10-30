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

async function DeleteUsuarios (id_usuario){
    const res = await administrador().DeleteUsuarios(id_usuario)
    return res
}

async function DeleteRecetas (id_receta){
    const res = await administrador().DeleteRecetas(id_receta)
    return res
}

async function DeleteFondo (id_fondo){
    const res = await administrador().DeleteFondo(id_fondo)
    return res
}
async function DeleteCarrusel (id_carrusel){
    const res = await administrador().DeleteCarrusel(id_carrusel)
    return res
}
async function Deletenameperfil (id){
    const res = await administrador().Deletenameperfil(id)
    return res
}

async function Deletenamepagina (id_nombre){
    const res = await administrador().Deletenamepagina(id_nombre)
    return res
}

async function DeletenameReceta (id){
    const res = await administrador().DeletenameReceta(id)
    return res
}

async function DeletenameComida (id){
    const res = await administrador().DeletenameComida(id)
    return res
}
async function DeletenameBebida (id){
    const res = await administrador().DeletenameBebida(id)
    return res
}
async function DeletenamePostre (id){
    const res = await administrador().DeletenamePostre(id)
    return res
}
async function DeleteBienvenida (id){
    const res = await administrador().DeleteBienvenida(id)
    return res
}
async function DeleteColores (id_colores){
    const res = await administrador().DeleteColores(id_colores)
    return res
}
async function DeleteBotones (id_botones){
    const res = await administrador().DeleteBotones(id_botones)
    return res
}
async function DeletenameFavorito (id){
    const res = await administrador().DeletenameFavorito(id)
    return res
}
async function DeleteClases (id_clases){
    const res = await administrador().DeleteClases(id_clases)
    return res
}
async function DeleteComent (id_comentario){
    const res = await administrador().DeleteComent(id_comentario)
    return res
}
async function DeleteChat (){
    const res = await administrador().DeleteChat()
    return res
}
async function DeleteVision (id_vision){
    const res = await administrador().DeleteVision(id_vision)
    return res
}
async function DeleteMision (id_mision){
    const res = await administrador().DeleteMision(id_mision)
    return res
}

// AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR AGREGAR

async function AddRecetas (req = null){
    
    const res = await administrador().AddRecetas(req)
    return res
}
async function AddClases (req = null){
    
    const res = await administrador().AddClases(req)
    return res
}
async function AddMision (req = null){
    
    const res = await administrador().AddMision(req)
    return res
}
async function AddVision (req = null){
    
    const res = await administrador().AddVision(req)
    return res
}
async function AddBoton (req = null){
    
    const res = await administrador().AddBoton(req)
    return res
}
async function AddColores (req = null){
    
    const res = await administrador().AddColores(req)
    return res
}
async function AddBienvenida (req = null){
    
    const res = await administrador().AddBienvenida(req)
    return res
}

async function Addnamereceta (req = null){
    
    const res = await administrador().Addnamereceta(req)
    return res
}
async function Addnamefavorito (req = null){
    
    const res = await administrador().Addnamefavorito(req)
    return res
}
async function Addnamecomida (req = null){
    
    const res = await administrador().Addnamecomida(req)
    return res
}
async function Addnamebebida (req = null){
    
    const res = await administrador().Addnamebebida(req)
    return res
}
async function Addnamepostre (req = null){
    
    const res = await administrador().Addnamepostre(req)
    return res
}
async function Addfondo (req = null){
    
    const res = await administrador().Addfondo(req)
    return res
}
async function Addcarrusel (req = null){
    
    const res = await administrador().Addcarrusel(req)
    return res
}
async function Addnamepagina (req = null){
    
    const res = await administrador().Addnamepagina(req)
    return res
}
async function Addnameperfil (req = null){
    
    const res = await administrador().Addnameperfil(req)
    return res
}

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