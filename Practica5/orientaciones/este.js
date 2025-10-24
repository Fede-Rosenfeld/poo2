const Este = function() {
    this.nombre = "Este";
};

Este.prototype.derecha = function() {
    const Sur = require('./sur');
    return new Sur();
};

Este.prototype.izquierda = function() {
    const Norte = require('./norte');
    return new Norte();
};

Este.prototype.avanzar = function(posicion) {
    return posicion.aumentarX();
};

Este.prototype.retroceder = function(posicion) {
    return posicion.reducirX();
};

module.exports = Este;

