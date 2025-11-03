const Topping = require('./topping');

const jamon = (function () {
    const Jamon = function () {
        this.costo = 5000;
    }

    Jamon.prototype = Object.create(Topping.prototype);
    Jamon.prototype.constructor = Jamon;

    return new Jamon();
})();

module.exports = jamon;