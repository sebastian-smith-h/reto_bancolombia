require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const usuarioRoutes = require("./routes/auth.routes");
const tareasRoutes =require("./routes/tareas.routes");

const errorHandler = require("./errors/appHeadler");

app.get ("/", (req, res) => {

    res.send("BIENVENIDO A LA API DE PRACTICA");

});

app.use("/api/auth", usuarioRoutes);
app.use("/api/tareas", tareasRoutes);

app.use(errorHandler);

app.listen (3000, () => {

    console.log("servidor corriendo en http://localhost:3000");

}) 