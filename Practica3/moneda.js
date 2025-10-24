const Moneda = function (monto, divisa) {
  this.monto = monto;
  this.divisa = divisa;

  this.equals = function (otro) {
    return this.monto === otro.monto && this.divisa === otro.divisa;
  };

  this.toString = function () {
    return `Moneda(${this.monto}, ${this.divisa})`;
  };
};

module.exports = Moneda;
