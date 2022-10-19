//estipulamos las reglas de conexión

const mongoose = require("mongoose"); //libreria necesaria para conectarme a mi db.

const mongoDBUrl = "mongodb://127.0.0.1/inmuebles";

//conectamos con la db

mongoose.connect(mongoDBUrl, {}); //establecemos la conexión en el punto más cercano al inicio de la conexión

//para asegurarnos de que nuestras colecciones realmente se registran en la base de datos.
require("./models/inmueble.model");
