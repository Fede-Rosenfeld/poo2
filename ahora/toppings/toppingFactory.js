const jamon = require('./jamon');
const roquefort = require('./roquefort');
const provolone = require('./provolone');
const sardinas = require('./sardinas');
const anana = require('./anana');

function ToppingFactory(nombreTopping) {
    switch (nombreTopping) {
        case "Jamon":
            return jamon;
        case "Anana":
            return anana;
        case "Provolone":
            return provolone;
        case "Sardinas":
            return sardinas;
        case "Roquefort":
            return roquefort;
        default:
            throw new Error(`Topping invalido: ${nombreTopping}`);
    }
}

module.exports = ToppingFactory;