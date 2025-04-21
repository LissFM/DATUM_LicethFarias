const mongoose = require ("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: [true, "Por favor ingresar su nombre completo"],
    },
    correo: {
        type: String,
        required: [true, "Por favor ingrese su correo"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Formato de correo inválido"],
    },
    contraseña: {
        type: String,
        required: [true, "Por favor ingrese su contraseña"],
        validate: {
          validator: function (value) {
            // Mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
          },
          message: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
        }
    },
    edad: {
        type: Number,
        validate: {
          validator: function (value) {
            return value >= 0;
          },
          message: "La edad debe ser un número positivo"
        }
    },
    estado: {
        type: Boolean,
        default: true,
    },
    
    fechaCreacion: {
        type: Date,
        default: Date.now, // opcional, por si el usuario se olvida de llenarlo
    },
    
    hobby: {
        type: String,
        default: "No especificado", // opcional, por si el usuario se olvida de llenarlo
    },
    colorFavorito: {
        type: String,
        required: [true, "Por favor es necesario que ingrese su color favorito"],
    },
    
});



module.exports = mongoose.model("Usuario", usuarioSchema);