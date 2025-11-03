const Topping = require('./topping');

const roquefort = (function () {
    const Roquefort = function () {
        this.costo = 8000;
    }

    Roquefort.prototype = Object.create(Topping.prototype);
    Roquefort.prototype.constructor = Roquefort;

    return new Roquefort();
})();

module.exports = roquefort;