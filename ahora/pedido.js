const Pizza = require("./pizza.js")
const FactoryMetodo = require("./factorymetodo.js/")


const PedidoNoIniciado = function () {
    this.cerrarPedido = function () {
        throw new Error("Debe haber un pedido activo");
    }

    this.iniciarPedido = function () {
        return new PedidoIniciado()
    }

    this.agregarPizza = function () {
        throw new Error("Debe haber un pedido activo")
    }

    this.costoPedidoEnCurso = function () {
        return 0;
    }
}

const PedidoIniciado = function () {
    this.pizzas = []
    this.metodoPago = null;
    // defino como predeterminado paga en efectivo

    this.cerrarPedido = function () {
        if(this.metodoPago === null){
            throw new Error("no se definio metodo de pago");
        }else{
            return new PedidoNoIniciado();
        }
    }

    this.iniciarPedido = function () {
        throw new Error("Ya existe un pedido activo");
    }

    this.agregarPizza = function (toppings) {
        this.pizzas.push(new Pizza(toppings));
    }

    

    this.dameDescuento = function(){
        return this.metodoPago.descuento();
    }

    this.costoPedidoEnCurso = function () {
        return this.pizzas.reduce(
            (acc, pizza) => {
                return acc + pizza.costo();
            }, 0)
    }

    this.metodoDePago = function(metodo){
        this.metodoPago = FactoryMetodo(metodo);
    };
}

module.exports = {
    PedidoIniciado, PedidoNoIniciado
}