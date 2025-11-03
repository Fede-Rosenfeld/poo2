const {PedidoNoIniciado, PedidoIniciado} = require("./pedido.js")


const Pizzeria = function () {
    this.pedidosCerrados = []
    this.pedidoActual = new PedidoNoIniciado();
	
    this.iniciarPedido = function () {
        this.pedidoActual = this.pedidoActual.iniciarPedido();
    }
	
    this.agregarPizza = function (toppings) {
        this.pedidoActual.agregarPizza(toppings);
    };

    this.metodoDePago = function(metodo){
        if(this.pedidoActual.costoPedidoEnCurso()<15000 && metodo == "Tarjeta"){
            throw new Error("El precio del pedido es menor a 15000 no se puede pagar con tarjeta")
        }
        this.pedidoActual.metodoDePago(metodo);
    };
	
    this.cerrarPedido = function () {
        this.pedidosCerrados.push(this.pedidoActual)
        this.pedidoActual = this.pedidoActual.cerrarPedido();

    };
    this.costoPedidoEnCurso = function () {
        return this.pedidoActual.costoPedidoEnCurso();
    };
	
    this.cantidadDePedidosCerrados = function () {
        return this.pedidosCerrados.length;
    }

    this.obtenerRecaudacionTotal = function () {
        return this.pedidosCerrados.reduce((acc, pedido) => acc + (pedido.costoPedidoEnCurso() * pedido.dameDescuento()), 0);
    }
}

module.exports = Pizzeria