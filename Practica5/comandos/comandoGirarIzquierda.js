const Comando = require('./comando');

const ComandoGirarIzquierda = function() {};
ComandoGirarIzquierda.prototype = Object.create(Comando.prototype);
ComandoGirarIzquierda.prototype.constructor = ComandoGirarIzquierda;

ComandoGirarIzquierda.prototype.ejecutar = function(rover) {
    rover.girarIzquierda();
};

module.exports = ComandoGirarIzquierda;

