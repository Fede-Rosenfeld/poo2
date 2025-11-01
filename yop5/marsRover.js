const Norte = require("./orientaciones/Norte");
const Posicion = require("./posicion");
const FabricaDeComandos = require("./fabricaDeComandos");

const MarsRover = function() {
    this.posicion = new Posicion(0, 0);
    this.orientacion = new Norte();
    this.fabricaDeComandos = new FabricaDeComandos();
    this.limiteMin = -50;
    this.limiteMax = 50;
};

MarsRover.prototype.obtenerPosicion = function() {
    return [...this.posicion.obtenerCoordenadas(), this.orientacion.nombre];
};

MarsRover.prototype.avanzar = function() {
    this.posicion = this.orientacion.avanzar(this.posicion);
};

MarsRover.prototype.retroceder = function() {
    this.posicion = this.orientacion.retroceder(this.posicion);
};

MarsRover.prototype.girarDerecha = function() {
    this.orientacion = this.orientacion.derecha();
};

MarsRover.prototype.girarIzquierda = function() {
    this.orientacion = this.orientacion.izquierda();
};

MarsRover.prototype.validarDentroDelMapa = function() {
    if (!this.posicion.estaEnLimites(this.limiteMin, this.limiteMax)) {
        throw new Error("El rover se saldría del mapa con esa secuencia");
    }
};

MarsRover.prototype.mover = function(secuencia) {
    const posicionInicial = this.posicion;
    const orientacionInicial = this.orientacion;
    
    try {
        secuencia.split("").forEach((c) => {
            const comando = this.fabricaDeComandos.crearComando(c);
            comando.ejecutar(this);
            this.validarDentroDelMapa();
        });
    } catch (error) {
        // Si hay un error, restaurar el estado inicial
        this.posicion = posicionInicial;
        this.orientacion = orientacionInicial;
        throw error; // Re-lanzar el error
    }
};

module.exports = MarsRover;
