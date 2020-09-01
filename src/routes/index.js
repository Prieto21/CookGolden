const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Diosito');
});

module.exports = router;