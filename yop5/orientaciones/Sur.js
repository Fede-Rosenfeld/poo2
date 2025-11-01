const Este = require('./Este');
const Oeste = require('./Oeste');

const Sur = function() {
    this.nombre = "Sur";
};

Sur.prototype.derecha = function() {
    return new Oeste();
};

Sur.prototype.izquierda = function() {
    return new Este();
};

Sur.prototype.avanzar = function(posicion) {
    return posicion.reducirY();
};

Sur.prototype.retroceder = function(posicion) {
    return posicion.aumentarY();
};

module.exports = Sur;

