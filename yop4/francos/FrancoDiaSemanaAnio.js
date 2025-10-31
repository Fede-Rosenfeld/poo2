const Franco = require("./Franco");

const FrancoDiaSemanaAnio = function(diaSemana, anio) {
  this.diaSemana = diaSemana;
  this.anio = anio;
};

FrancoDiaSemanaAnio.prototype = Object.create(Franco.prototype);
FrancoDiaSemanaAnio.prototype.constructor = FrancoDiaSemanaAnio;

FrancoDiaSemanaAnio.prototype.esFranco = function(fecha) {
  return fecha.getDay() === this.diaSemana && fecha.getFullYear() === this.anio;
};

module.exports = FrancoDiaSemanaAnio;
