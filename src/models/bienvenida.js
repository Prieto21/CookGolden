'use strict'


const pool = require('../database');


module.exports = function () {

    async function listar(req) {
        const data = await pool.query('SELECT * FROM nombre;');
        return data

    }
    
    return {
        listar,
      


    }

    
}

