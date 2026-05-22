const jwt = require("jsonwebtoken");
const AppError = require("../errors/appError");

module.exports = (req, res, next) => {

    try{

        const authorization = req.headers.authorization;

        if(!authorization || !authorization.startsWith("Bearer")){
            throw new AppError("el token no ha sido ingresado o es incorrecto", 401);
        }

        const token = authorization.split(" ")[1];

        const valido = jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = valido;

        next();
    }

    catch(error){

        if(error.name === "TokenExpiredError"){
            return next(new AppError("tu sesion ha expirado, inicia sesion nuevamente", 401))
        }

        if(error.name === "JsonWebTokenError"){
            return next(new AppError("token invalido o corrupto",401))
        }

        next(error);
    }
}