
const Franco = require("./Franco");

const FrancoDiaEspecifico = function(dia, mes, anio) {
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
};

FrancoDiaEspecifico.prototype = Object.create(Franco.prototype);
FrancoDiaEspecifico.prototype.constructor = FrancoDiaEspecifico;

FrancoDiaEspecifico.prototype.esFranco = function(fecha) {
  return (
    fecha.getDate() === this.dia &&
    fecha.getMonth() === this.mes - 1 &&
    fecha.getFullYear() === this.anio
  );
};

module.exports = FrancoDiaEspecifico;
