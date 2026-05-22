const database = require("../config/db");

exports.asignarTarea = async (titulo, descripcion, estado, usuario_id) => {

    const [resultado] = await database.query("INSERT INTO tareas (titulo, descripcion, estado, usuario_id) VALUES (?, ?, ?, ?)", 
        [titulo, descripcion, estado, usuario_id]);

        return resultado.insertId;

}

exports.tareasAsignadas = async () => {

    const [resultado] = await database.query("SELECT * FROM tareas");
    return resultado;
}