const Norte = require("./norte.js");
const Sur = require("./sur.js");
const Este = require("./este.js");
const Oeste = require("./oeste.js");


Orientacion = function(ini){
    switch(ini){
        case "N":
            ori= new Norte();
            break;
        case "S":
            ori = new Sur();
            break;
        case "E":
            ori = new Este();
            break;
        case "O":
            ori = new Oeste();
            break;
        default:
            throw console.error("ORIENTACION INVALIDA");  
    }
    return ori;

}
module.exports=Orientacion;