const Franco = require("./Franco");

const FrancoMesCompletoAnio = function(mes, anio) {
  this.mes = mes;
  this.anio = anio;
};

FrancoMesCompletoAnio.prototype = Object.create(Franco.prototype);
FrancoMesCompletoAnio.prototype.constructor = FrancoMesCompletoAnio;

FrancoMesCompletoAnio.prototype.esFranco = function(fecha) {
  return fecha.getMonth() === this.mes - 1 && fecha.getFullYear() === this.anio;
};

module.exports = FrancoMesCompletoAnio;

