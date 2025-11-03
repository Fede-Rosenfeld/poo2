

function Metodo(){
}

Metodo.prototype.descuento = function(){
    throw new Error("Cada metodo implementa su descuento")
}

module.exports = Metodo;