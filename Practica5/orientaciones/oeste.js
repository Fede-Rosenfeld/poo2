const Oeste = function() {
    this.nombre = "Oeste";
};

Oeste.prototype.derecha = function() {
    const Norte = require('./norte');
    return new Norte();
};

Oeste.prototype.izquierda = function() {
    const Sur = require('./sur');
    return new Sur();
};

Oeste.prototype.avanzar = function(posicion) {
    return posicion.reducirX();
};

Oeste.prototype.retroceder = function(posicion) {
    return posicion.aumentarX();
};

module.exports = Oeste;

