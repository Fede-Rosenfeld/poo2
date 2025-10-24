const Este = require('./este');
const Oeste = require('./oeste');

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

