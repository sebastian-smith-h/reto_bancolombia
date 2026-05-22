const express = require("express");
const router = express.Router();

const rutasTareas = require("../controllers/tareas.controllers");
const authValidator = require("../middlewares/auth.validator");

router.post("/", authValidator,rutasTareas.datosTareas);
router.get("/", authValidator, rutasTareas.obtenerTareas);


module.exports = router;