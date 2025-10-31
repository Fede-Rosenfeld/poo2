const Franco = require("./Franco");

const FrancoDiaMensualAnio = function(dia, anio) {
  this.dia = dia;
  this.anio = anio;
};

FrancoDiaMensualAnio.prototype = Object.create(Franco.prototype);
FrancoDiaMensualAnio.prototype.constructor = FrancoDiaMensualAnio;

FrancoDiaMensualAnio.prototype.esFranco = function(fecha) {
  return fecha.getDate() === this.dia && fecha.getFullYear() === this.anio;
};

module.exports = FrancoDiaMensualAnio;
