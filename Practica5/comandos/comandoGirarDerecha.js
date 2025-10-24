const Comando = require('./comando');

const ComandoGirarDerecha = function() {};
ComandoGirarDerecha.prototype = Object.create(Comando.prototype);
ComandoGirarDerecha.prototype.constructor = ComandoGirarDerecha;

ComandoGirarDerecha.prototype.ejecutar = function(rover) {
    rover.girarDerecha();
};

module.exports = ComandoGirarDerecha;

