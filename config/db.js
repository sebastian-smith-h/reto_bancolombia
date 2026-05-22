const mysql = require("mysql2");

const database = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

database.getConnection((error, coneccion) => {

    if(error){
        console.log("error en la base de datos", error.message);
    }

    else{
        console.log("conectado en la base de datos");
        coneccion.release();
    }
});

module.exports = database.promise();