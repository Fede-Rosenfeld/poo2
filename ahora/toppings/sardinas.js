const Topping = require('./topping');

const sardinas = (function () {
    const Sardinas = function () {
        this.costo = 6000;
    }

    Sardinas.prototype = Object.create(Topping.prototype);
    Sardinas.prototype.constructor = Sardinas;

    return new Sardinas();
})();

module.exports = sardinas;