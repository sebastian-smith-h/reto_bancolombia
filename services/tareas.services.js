const tareas = require("../models/tareas.models");
const AppError = require("../errors/appError");

exports.asignarTareas = async (datos) => {

    const {titulo, descripcion, estado, usuario_id} = datos;

    if(!datos.titulo || !datos.descripcion){
        throw new AppError("el titulo y la descripcion son obligatorios", 400);
    }

    const estadoFinal = datos.estado || "pendiente";

    const asignado = await tareas.asignarTarea(titulo, descripcion, estado, usuario_id);

    return {id_tarea: asignado, titulo, descripcion, estado: estadoFinal, usuario_id};

    
}

exports.tareasAsignadas = async () => {

    return await tareas.tareasAsignadas();

    

}