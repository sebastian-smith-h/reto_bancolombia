const database = require("../config/db");


exports.crearUsuario = async (nombre, email, password) => {

    const [resultado] = await database.query("INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?)", [nombre, email, password]);

    return resultado.insertId;

}

exports.validarEmail = async (email) => {

    const [fila] = await database.query("SELECT * FROM usuarios WHERE email = ?", [email]);
    return fila[0];
    
}

