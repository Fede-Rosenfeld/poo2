// Clase base Comando
const Comando = function() {};

Comando.prototype.ejecutar = function(rover) {
    throw new Error("El método ejecutar debe ser implementado");
};

module.exports = Comando;

