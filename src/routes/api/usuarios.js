const express = require('express');
const router=express.Router();
//const pool = require('../database');
const usuariosController = require('../../controllers/usuariosController');

//LISTAR
router.get("/user", usuariosController.listarusuarios);


//AGREGAR
/*
router.post('/AddUser', async(req,res)=>{
    //const {nombre,apellido,usuario, contra, img, id_rol} = req.body;
     
    await usuariosController.Addusuarios(req.body);
     res.send('ok');
});*/

router.post("/AddUser", usuariosController.Addusuarios);



//MODIFICAR
router.put("/user/modificar/:id_usuario", usuariosController.ModUsuarios);




//ELIMINAR




router.delete("/DeleteUser/:id_usuario", usuariosController.DeleteUsuarios);
   




module.exports=router;