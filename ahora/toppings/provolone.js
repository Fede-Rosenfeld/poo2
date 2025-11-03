const Topping = require('./topping');

const provolone = (function () {
    const Provolone = function () {
        this.costo = 7000;
    }

    Provolone.prototype = Object.create(Topping.prototype);
    Provolone.prototype.constructor = Provolone;

    return new Provolone();
})();

module.exports = provolone;