const factoryFranco = require("./factoryFranco");

const Empleado = function(nombre) {
  this.nombre = nombre;
  this.francos = [];
};

Empleado.prototype.agregarFranco = function(tipo, ...args) {
  const nuevoFranco = factoryFranco(tipo, ...args);
  this.francos.push(nuevoFranco);
};

Empleado.prototype.tieneFranco = function(fecha) {
  return this.francos.some(f => f.esFranco(fecha));
};

module.exports = Empleado;
