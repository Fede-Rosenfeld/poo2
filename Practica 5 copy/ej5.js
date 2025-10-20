const Rover = require("./rover.js");

rover = new Rover();
rover.move("www");
console.log(rover.mostrarPosicion());
rover.move("wwwsssssssssssssssssssssssssssss");
console.log(rover.mostrarPosicion());
rover.move("wwwwwwwdwwwwwwwwwwwwww");
console.log(rover.mostrarPosicion());
rover.move("awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
console.log(rover.mostrarPosicion());
rover.mostrarMapa();