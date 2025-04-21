const express = require ("express");

const {
    crearUsuario,
    obtenerUsuarioPorId,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
} = require("../controllers/user.controller");

const router = express.Router();

// Para crear usuarios: POST /api/usuarios

router.post("/crear", crearUsuario);        

// Para obtener usuarios: GET /api/usuarios

router.get("/", obtenerUsuarios);          

// Para obtener un usuario en específico: GET /api/usuarios/:id

router.get("/:id", obtenerUsuarioPorId);   

//Ruta para actualizar un usuario: // PUT /api/usuarios/:id

router.put("/:id", actualizarUsuario);     

//Ruta para eliminar un usuario: // DELETE /api/usuarios/:id

router.delete("/:id", eliminarUsuario);

module.exports = router;
