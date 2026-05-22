const tareas = require("../services/tareas.services");

exports.datosTareas = async (req, res, next) => {

    try{

        const datos = {

            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
            usuario_id: req.usuario.id

        };

        const ingresados = await tareas.asignarTareas(datos);

        res.status(201).json({
            exito: true,
            message: "datos insertados con exito",
            datos: ingresados
        })
    }

    catch(error){
        next(error);
    }
}

exports.obtenerTareas = async (req, res, next) => {

    try{

        const datos = await tareas.tareasAsignadas();

        res.status(200).json({ 
            exito: true,
            message: "datos obtenos con exito",
            datos: datos
        })
    }
    catch(error){
        next(error);
    }
}