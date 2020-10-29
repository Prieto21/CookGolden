
const usuariosModel = require('../models/usuarios')
const controller = {};


controller.listarusuarios = async (req, res) => {
    const user = await usuariosModel.listarusuarios();
    res.json({ user });
  };
/*
async function Addusuarios (req = null){
    const data = req.body;
    const res = await usuarios().Addusuarios(data)
    return res 
    //console.log({data})
}*/

controller.Addusuarios = async (req,res) =>{

   await usuariosModel.Addusuarios(req.body);
    res.status(200).json({ message: "Se agrego correctamente" });


};


controller.ModUsuarios = async (req, res) =>{
    
    await usuariosModel.ModUsuarios(req.body, req.params.id_usuario);
    res.status(200).json({ message: "Se modifico el usuario" });
}

controller.DeleteUsuarios = async (req,res) =>{
    
    await usuariosModel.DeleteUsuarios(req.params.id_usuario);
    res.status(200).json({ message: "Se elimino el usuario" });
}


module.exports = controller;