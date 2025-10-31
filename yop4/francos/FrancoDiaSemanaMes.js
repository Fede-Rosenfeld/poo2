const Franco = require("./Franco");

const FrancoDiaSemanaMes = function(diaSemana, mes) {
  this.diaSemana = diaSemana;
  this.mes = mes;
};

FrancoDiaSemanaMes.prototype = Object.create(Franco.prototype);
FrancoDiaSemanaMes.prototype.constructor = FrancoDiaSemanaMes;

FrancoDiaSemanaMes.prototype.esFranco = function(fecha) {
  return fecha.getDay() === this.diaSemana && fecha.getMonth() === this.mes - 1;
};

module.exports = FrancoDiaSemanaMes;
