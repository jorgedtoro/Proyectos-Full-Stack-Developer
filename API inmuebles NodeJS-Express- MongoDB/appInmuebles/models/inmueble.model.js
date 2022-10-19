const mongoose = require("mongoose");

const Schema = mongoose.Schema; //clase para poder generar nuestros propios Schemas.

const inmuebleSchema = new Schema({
  piso: String,
  letra: String,
  extension: Number,
  habitaciones: Number,
  alquilado: Boolean,
  propietario: String,
  mail: String,
});

//exportamos el modelo de nuestro proyecto.
//en este caso el modelo es inmueble.
//en la base de datos se guardara en la coleccion inmuebles.
module.exports = mongoose.model("inmueble", inmuebleSchema);
