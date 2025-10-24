const Libra = require("./libra");
const Peso = require("./peso");

const TarjetaOyster = function (numeroDeIdentificador) {
  this.saldo = new Libra(0);
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

  this.validarViaje = function (montoAPagar) {
    if (this.saldo.menor(montoAPagar)) {
      throw new Error("Saldo insuficiente.");
    }
  };

  this.tenesId = function (identificador) {
    return this.identificador === identificador;
  };
};

module.exports = TarjetaOyster;
