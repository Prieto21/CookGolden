'use strict'
const bienvenida = require('../models/bienvenida')



async function listar (req = null){
    const res = await bienvenida().listar()
    
    return res 
}



module.exports = {

    listar,
   

}