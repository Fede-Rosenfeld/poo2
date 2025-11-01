
const Este = require('./Este');
const Oeste = require('./Oeste');

const Norte = function() {
    this.nombre = "Norte";
};

Norte.prototype.derecha = function() {
    return new Este();
};

Norte.prototype.izquierda = function() {
    return new Oeste();
};

Norte.prototype.avanzar = function(posicion) {
    return posicion.aumentarY();
};

Norte.prototype.retroceder = function(posicion) {
    return posicion.reducirY();
};

module.exports = Norte;