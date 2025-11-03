const Topping = require('./topping');

const anana = (function () {
    const Anana = function () {
        this.costo = 4000;
    }

    Anana.prototype = Object.create(Topping.prototype);
    Anana.prototype.constructor = Anana;

    return new Anana();
})();

module.exports = anana;