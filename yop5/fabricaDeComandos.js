const ComandoAvanzar = require('./comandos/comandoAvanzar');
const ComandoRetroceder= require('./comandos/comandoRetroceder');
const  ComandoGirarDerecha= require('./comandos/ComandoGirarDerecha');
const  ComandoGirarIzquierda= require('./comandos/ComandoGirarIzquierada');


const FabricaDeComandos = function() {
    this.mapaDeComandos = {
        'W': new ComandoAvanzar(),
        'S': new ComandoRetroceder(),
        'D': new ComandoGirarDerecha(),
        'A': new ComandoGirarIzquierda()
    };
};

FabricaDeComandos.prototype.crearComando = function(caracterComando) {
    const comando = this.mapaDeComandos[caracterComando];
    if (!comando) {
        throw new Error(`Comando desconocido: ${caracterComando}`);
    }
    return comando;
};

FabricaDeComandos.prototype.obtenerComandosSoportados = function() {
    return Object.keys(this.mapaDeComandos);
};

module.exports = FabricaDeComandos;

