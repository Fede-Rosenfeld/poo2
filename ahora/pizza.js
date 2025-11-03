const ToppingFactory = require('./toppings/toppingFactory');

const Pizza = function (toppings) {
    const costoBasePizza = 10000;

    this.toppings = []

    toppings.forEach((nombreTopping) => {
        const nuevoTopping = ToppingFactory(nombreTopping);

        if (this.toppings.some((topping) => topping.sos(nuevoTopping))) {
            throw new Error("La pizza no puede contener toppings duplicados");
        }

        this.toppings.push(nuevoTopping)
    })

    this.costo = function () {
        const costoDeToppings = this.toppings.reduce((acc, topping) => acc + topping.obtenerCosto(), 0)
        return costoBasePizza + costoDeToppings;
    }
}

module.exports = Pizza