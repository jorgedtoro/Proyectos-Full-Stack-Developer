const { validationResult } = require("express-validator");

//authors validation
const newAuthor = {
  name: {
    exists: true,
    errorMessage: "El nombre del autor es obligatorio",
  },
  email: {
    exists: {
      errorMessage: "El email es obligatorio",
    },
    isEmail: {
      errorMessage: "El email debe ser válido",
    },
  },
};

//posts validation

const newPost = {
  title: {
    exists: {
      errorMessage: "El título del post es obligatorio",
    },
    isLenght: {
      options: { max: 120 },
      errorMessage: "La longitud máxima de caracteres es de 120",
    },
  },
  description: {
    exists: true,
    errorMessage: "La descripción del post es obligatoria",
  },
};

//función para comprobar los errores de validación.

const checkError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //si la constante errors no está vacía, es que existen errores.
    //modificamos el estado a 400 para indicar que es error del cliente
    return res.status(400).json(errors.mapped());
  }
  next();
};

module.exports = {
  newAuthor,
  newPost,
  checkError,
};
