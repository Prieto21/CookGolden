const express = require('express');
const router=express.Router();
//const pool = require('../database');
const recetasController = require('../../controllers/recetasController');

//LISTAR
router.get('/postres', async (req, res) => {
    const postres = await recetasController.listarpostres(req);
    
    res.json({postres});
});
router.get('/comidas', async (req, res) => {
    const comidas = await recetasController.listarcomidas(req);
    
    res.json({comidas});
});
router.get('/bebidas', async (req, res) => {
    const bebidas = await recetasController.listarbebidas(req);
    
    res.json({bebidas});
});


//AGREGAR

router.post('/AddRecetas', async(req,res)=>{
    
     
      await recetasController.AddRecetas(req);
     res.send('ok');
});



//MODIFICAR

router.post('/recetas/modificar/:id_receta', async(req,res)=>{
    const {id_receta} = req.params;
     await recetasController.ModReceta(req,id_receta);
    
    res.send('ok');
});



//ELIMINAR



router.get('/DeleteRecetas/:id_receta',async(req,res)=>{
    const {id_receta} = req.params;
     await recetasController.DeleteRecetas([id_receta]);
    //await pool.query('DELETE FROM favoritos WHERE id_favorito = ?',[id_favorito]);    
    res.send('ok')
});





module.exports=router;