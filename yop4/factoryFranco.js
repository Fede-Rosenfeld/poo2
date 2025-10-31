const FrancoDiaEspecifico = require("./francos/FrancoDiaEspecifico");
const FrancoDiaAnual = require("./francos/FrancoDiaAnual");
const FrancoDiaSemana = require("./francos/FrancoDiaSemana");
const FrancoDiaSemanaAnio = require("./francos/FrancoDiaSemanaAnio");
const FrancoDiaSemanaMes = require("./francos/FrancoDiaSemanaMes");
const FrancoDiaMensualAnio = require("./francos/FrancoDiaMensualAnio");
const FrancoMesCompletoAnio = require("./francos/FrancoMesCompletoAnio");

const factoryFranco = function(tipo,...args){
    switch (tipo) {
      case "especifico":
        return new FrancoDiaEspecifico(...args);
      case "anual":
        return new FrancoDiaAnual(...args);
      case "semana":
        return new FrancoDiaSemana(...args);
      case "semanaAnio":
        return new FrancoDiaSemanaAnio(...args);
      case "semanaMes":
        return new FrancoDiaSemanaMes(...args);
      case "mensualAnio":
        return new FrancoDiaMensualAnio(...args);
      case "mesCompletoAnio":
        return new FrancoMesCompletoAnio(...args);
      default:
        throw new Error("Tipo de franco no reconocido");
    }
};

module.exports = factoryFranco;
