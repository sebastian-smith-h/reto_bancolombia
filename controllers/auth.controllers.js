const usuario = require("../services/usuario.services");

exports.usuarioDatos = async (req, res, next) => {

    try{

        const datos = await usuario.registrarUsuario(req.body);

        res.status(201).json({

            exito: true,
            message: "usuario registrado con exito",
            datos: datos
        });
    }
    catch(error){
        next(error);
    }
}

exports.login = async (req, res, next) => {


    try{

        const datos = await usuario.auntenticacionUsuario(req.body);

        res.status(201).json({

            exito: true,
            message: "login exitoso",
            datos: datos
        });
    }
    catch(error){
        next(error);
    }
}