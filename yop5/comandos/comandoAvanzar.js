

const Comando = require('./comando');

const ComandoAvanzar = function() {};
ComandoAvanzar.prototype = Object.create(Comando.prototype);
ComandoAvanzar.prototype.constructor = ComandoAvanzar;

ComandoAvanzar.prototype.ejecutar = function(rover) {
    rover.avanzar();
};

module.exports = ComandoAvanzar;
