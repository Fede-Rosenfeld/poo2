const Peso = require("./peso");
const Libra = require("./libra");

const Sube = function (numeroDeIdentificador) {
  SALDO_MINIMO = new Peso(-600);
  this.saldo = new Peso(0);
  this.identificador = numeroDeIdentificador;

  this.obtenerSaldo = function () {
    return this.saldo;
  };

  this.cargarSaldo = function (montoACargar) {
    this.saldo = this.saldo.mas(montoACargar);
  };

  this.pagarViaje = function (precioDeViaje) {
    this.validarViaje(precioDeViaje);
    this.saldo = this.saldo.menos(precioDeViaje);
  };

  this.tenesId = function (identificador) {
    return this.identificador === identificador;
  };

  this.validarViaje = function (precioDeViaje) {
    if (this.saldo.menos(precioDeViaje).menor(SALDO_MINIMO)) {
      throw new Error("Saldo insuficiente.");
    }
  };
};

module.exports = Sube;
