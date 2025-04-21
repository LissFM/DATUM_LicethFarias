const mongoosse = require ("mongoose")

const url = "mongodb://localhost:27017/datum"

const connectBaseD = async () => {
    try{
      await mongoosse.connect(url)
        console.log("Conectado a MongoDB exitosamente")
    } catch (error) {
        console.error("Erros de conexión a MongoDB" + error)
    }
}


module.exports= connectBaseD
