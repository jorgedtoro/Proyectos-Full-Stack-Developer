// Syntax sugar

// Spread operator

// arrays

const numbers = [1, 2, 3];
const morenumbers = [4, 5];
const concatNumbers = [...numbers, ...morenumbers];

console.log(concatNumbers);

console.log([..."BD"]);

// objetos
const alumno = {
  nombre: "Jorge",
  apellidos: "De Toro",
};

const alumnoConEdad = {...alumno, edad: 25};
console.log(alumnoConEdad);




// Desestructuración
const alumno2 = {
  nombre: "Jorge",
  apellidos: "De Toro",
  edad: 25,
  online: true
};

/*
const nombre = alumno2.nombre;
const apellidos = alumno2.apellidos;
*/
const {nombre, apellidos, edad: years} = alumno2;

const [element0, element1] = [1,2];
console.log(element0);


// Ejempo desestructuración en funciones

/*
const saludador = (nombre, apellidos, edad) => {
  console.log(nombre, apellidos, edad);
}
saludador(alumno2.nombre, alumno2.apellidos, alumno2.edad);
*/

const saludador = ({nombre, apellidos, edad}) => {
  console.log(nombre, apellidos, edad);
}
saludador(alumno2);
