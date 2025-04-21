const usuarioService = require ("../services/user.service");

// Crear un nuevo usuario

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json({
            exito:true,
            mensaje: "Su usuario ha sido creado",
            datos: nuevoUsuario,
        });
    } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Existe error al crear  su usuario",
            error: error.message,
        });
    }
};

// Obtener todos los usuarios

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.obtenerUsuarios();
        res.status(200).json({
            exito: true,
            mensaje: "Usuarios Obtenidos con éxito",
            datos: usuarios,  // <- aquí mandas los datos
        });

    } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Error al obtener los usuarios",
            message: error,
        });
    }
};

// Obtener un usuario por ID:

const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
        res.status(200).json({
            exito: true,
            datos: usuario,
        });
    } catch (error){
        res.status(404).json({
            exito: false,
            message: error,
        });
    }
};

// Actualiza un usuario existente

const actualizarUsuario = async (req, res) => {
    try {
      const usuarioActualizado = await usuarioService.actualizarUsuario(
        req.params.id,
        req.body
      );
      res.status(200).json({
        exito: true,
        mensaje: "Usuario actualizado correctamente",
        datos: usuarioActualizado,
      });
    } catch (error) {
      res.status(404).json({
        exito: false,
      });
    }
};


// Eliminar un usuario
  
const eliminarUsuario = async (req, res) => {
    try {
      await usuarioService.eliminarUsuario(req.params.id);
      res.status(200).json({
        exito: true,
        mensaje: "El usuario se elimino correctamente",
      });
    } catch (error) {
      res.status(404).json({
        exito: false,
      });
    }
};
  
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
};