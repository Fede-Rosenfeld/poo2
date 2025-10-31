const Franco = require("./Franco");

const FrancoDiaAnual = function(dia, mes) {
  this.dia = dia;
  this.mes = mes;
};

FrancoDiaAnual.prototype = Object.create(Franco.prototype);
FrancoDiaAnual.prototype.constructor = FrancoDiaAnual;

FrancoDiaAnual.prototype.esFranco = function(fecha) {
  return fecha.getDate() === this.dia && fecha.getMonth() === this.mes - 1;
};

module.exports = FrancoDiaAnual;
