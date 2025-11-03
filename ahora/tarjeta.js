



const Metodo = require("./metodo");

function Tarjeta(){
}

Tarjeta.prototype = Object.create(Metodo.prototype);
Tarjeta.prototype.constructor = Tarjeta;

Tarjeta.prototype.descuento = function(){
    return 1;
}


module.exports = Tarjeta;