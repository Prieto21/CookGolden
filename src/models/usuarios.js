


const pool = require('../database');
const model = {};

model.listarusuarios = async () => {
    const data = await pool.query('SELECT * FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_rol= 2;');
    return data
    

}



    
model.Addusuarios = async (usuarios) => {
    const sql = `INSERT INTO usuarios SET ?`;
    await pool.query(sql, usuarios);
}




model.DeleteUsuarios = async (id_usuario) => {
    await pool.query('DELETE FROM usuarios WHERE id_usuario = ?',[id_usuario])
    return true;
}



    
model.ModUsuarios = async (usuarios, id_usuario) =>{
        await pool.query('UPDATE usuarios SET ? WHERE id_usuario = ?',[usuarios, id_usuario])
        return true;
    }



    

module.exports = model;









