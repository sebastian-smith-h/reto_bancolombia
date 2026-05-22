const usuario = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");
const AppError = require("../errors/appError");
const jwt = require("jsonwebtoken");

exports.registrarUsuario = async (datos) => {

    const {nombre, email, password} = datos;

    const validarEmail = await usuario.validarEmail(email);

    if(validarEmail){
        throw new AppError("el email ya se encuentra registrado", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const registrado = await usuario.crearUsuario(nombre, email, passwordHashed);

    return {id: registrado, nombre, email}
}

exports.auntenticacionUsuario = async (datos) => {


    const {email, password} = datos;

    const validarEmail = await usuario.validarEmail(email);
    
    if(!validarEmail){
        throw new AppError("El email no coincide", 400);
    }

    const validarPassword = await bcrypt.compare(password, validarEmail.password);

    if(!validarPassword){
        throw new AppError("la contraseña no es valida", 400);
    }

    const token = jwt.sign(

        {id: validarEmail.id_usuario, nombre: validarEmail.nombre},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}

    );

    return {token};
}


