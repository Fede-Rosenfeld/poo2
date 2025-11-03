const Topping = function () {}

Topping.prototype.sos = function (topping) {
    return this === topping;
}

Topping.prototype.obtenerCosto = function () {
    return this.costo;
}

module.exports = Topping;