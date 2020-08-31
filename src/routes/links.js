const express = require('express');
const router=express.Router();
const exphbs = require('express-handlebars');

router.get('/add',(req,res)=>{
    //res.send('Diosito');
    res.render('links/add')
});
module.exports=router;