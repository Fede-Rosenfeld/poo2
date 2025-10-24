const Comando = require('./comando');

const ComandoRetroceder = function() {};
ComandoRetroceder.prototype = Object.create(Comando.prototype);
ComandoRetroceder.prototype.constructor = ComandoRetroceder;

ComandoRetroceder.prototype.ejecutar = function(rover) {
    rover.retroceder();
};

module.exports = ComandoRetroceder;

