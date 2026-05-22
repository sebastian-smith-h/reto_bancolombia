const errorHandler = (err, req, res, next) => {


    const statusCode = err.statusCode || 500;
    const message = err.message || "error interno en el servidor";

    res.status(statusCode).json({exito: false, error: message});

}

module.exports = errorHandler;