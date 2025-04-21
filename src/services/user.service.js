const Usuario = require("../models/user.model");

//Para crear un nuevo usuario:

const crearUsuario = async (usuarioData) => {
    try {
        const nuevoUsuario = new Usuario(usuarioData);
        return await nuevoUsuario.save();
      
    } catch (error) {
        console.error(error);
    }
};

//Para obtener todos los usuarios:

const obtenerUsuarios = async () => {
    try {
        return await Usuario.find();                         aw
    } catch (error) {
        console.error(error);
        throw error;
    }
};

//Para obtener un usuario por medio de su ID:

const obtenerUsuarioPorId = async (id) => {
    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return "Usuario no encontrado";
        }
        return usuario;
    } catch (error) {
        console.error (error);
    }
};

// Para actualizar un usuario existente:

const actualizarUsuario = async (id, datosActualizados) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            id,
            datosActualizados,
            { new: true, runValidators: true}
        )
        if (!usuarioActualizado) {
            return "Usuario no encontrado";
        }
        return usuarioActualizado;
    } catch (error) {
        console.log("Estas en un error" + error);
    }
};

//Para eliminar un usuario:

const eliminarUsuario = async (id) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return "Usuario no encontrado";
        }
        return { mensaje:"Usuario eliminado correctamente"};
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
};

