
const Tarjeta = require("./tarjeta");
const Efectivo = require("./efectivo");

function FactoryMetodo(metodo){
    switch(metodo){
        case "Tarjeta":
            this.metodoDePago = new Tarjeta();
                return this.metodoDePago;
        case "Efectivo":
            this.metodoDePago = new Efectivo();
                return this.metodoDePago;
        default:
            throw new Error("no existe ese metodo de pago");
    }
}

module.exports = FactoryMetodo;