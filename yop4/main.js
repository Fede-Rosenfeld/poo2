const Empleado = require("./Empleado");

const juan = new Empleado("Juan");

// Día específico del año
juan.agregarFranco("especifico", 1, 1, 2024); // 1 enero 2024

// Todos los años el 9 de julio
juan.agregarFranco("anual", 9, 7);

// Todos los lunes
juan.agregarFranco("semana", 1);

// Todos los martes de septiembre
juan.agregarFranco("semanaMes", 2, 9);

const fecha = new Date("2024-09-10"); // Martes 10 sept 2024

console.log(juan.tieneFranco(fecha)); // true

