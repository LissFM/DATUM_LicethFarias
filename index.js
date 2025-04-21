const express = require("express");
const connectBaseD = require("./src/config/database");
const usuarioRoutes = require ("./src/routes/user.routes")


// Para Inicializar la app de Express realizamos lo siguiente

const app = express();

//Realizamos un Middleware para parsear el JSON

app.use(express.json());

//Para conectarse a la base de datos realizamos:

connectBaseD();

//Realizamos una ruta de bienvenida

app.get("/", (req,res) => {
  res.send("Bienvenido a la API de usuarios")
})

//Ruta de usuarios

app.use("/api/usuarios", usuarioRoutes);

// Inicializamos el servidor

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



