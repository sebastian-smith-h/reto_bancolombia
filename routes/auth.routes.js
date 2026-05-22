const express = require("express");
const router = express.Router();

const usuarioRouter = require("../controllers/auth.controllers");


router.post("/registrar", usuarioRouter.usuarioDatos);
router.post("/login", usuarioRouter.login);

module.exports = router;