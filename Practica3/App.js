const Sube = require("./tarjetaSube.js");
const Oyster = require("./tarjetaOyster.js");
const Peso = require("./peso.js");
const Libra = require("./libra.js");

const sistemaCentralizado = require("./sistemaCentralizado.js");

const tarjeta1 = new Sube(1);
const tarjeta2 = new Oyster(2);
const milDoscientosCincuentaPesos = new Peso(1250);
const unaLibra = new Libra(1);

sistemaCentralizado.cargarTarjeta(1, milDoscientosCincuentaPesos);
sistemaCentralizado.cargarTarjeta(1, unaLibra);

console.log(
  "Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes()
);
console.log("Acredito saldo tarjeta 2");
sistemaCentralizado.acreditarSaldo(tarjeta2);
console.log(tarjeta2.obtenerSaldo().toString());
console.log(
  "Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes()
);

console.log("Saldo tarjeta 1 antes de acreditar");
console.log(tarjeta1.obtenerSaldo().toString());

console.log("Saldo tarjeta 1 despues de acreditar");
sistemaCentralizado.acreditarSaldo(tarjeta1);
sistemaCentralizado.acreditarSaldo(tarjeta1);
console.log("Tarjeta 1:" + tarjeta1.obtenerSaldo().toString());
console.log(
  "Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes()
);

sistemaCentralizado.cargarTarjeta(2, milDoscientosCincuentaPesos);
sistemaCentralizado.cargarTarjeta(2, unaLibra);
sistemaCentralizado.acreditarSaldo(tarjeta2);
console.log("Tarjeta 2: " + tarjeta2.obtenerSaldo().toString());

tarjeta1.pagarViaje(unaLibra);
tarjeta1.pagarViaje(milDoscientosCincuentaPesos);
tarjeta2.pagarViaje(unaLibra);
tarjeta2.pagarViaje(milDoscientosCincuentaPesos);
console.log("Tarjeta 1: " + tarjeta1.obtenerSaldo().toString());
console.log("Tarjeta 2: " + tarjeta2.obtenerSaldo().toString());
