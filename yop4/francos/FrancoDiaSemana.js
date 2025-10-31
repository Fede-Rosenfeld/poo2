const Franco = require("./Franco");

const FrancoDiaSemana = function(diaSemana) {
  this.diaSemana = diaSemana; // 0=Dom, 1=Lun, 2=Mar, etc.
};

FrancoDiaSemana.prototype = Object.create(Franco.prototype);
FrancoDiaSemana.prototype.constructor = FrancoDiaSemana;

FrancoDiaSemana.prototype.esFranco = function(fecha) {
  return fecha.getDay() === this.diaSemana;
};

module.exports = FrancoDiaSemana;
