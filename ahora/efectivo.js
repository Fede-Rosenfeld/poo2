

const Metodo = require("./metodo");

function Efectivo(){
}

Efectivo.prototype = Object.create(Metodo.prototype);
Efectivo.prototype.constructor = Efectivo;

Efectivo.prototype.descuento = function(){
    return 0.8;
}


module.exports = Efectivo;