const Pizzeria = require("./pizzeria.js")

test("cuando se trata de cerrar un pedido, sin ninguno abierto entonces la accion falla", () => {
    const pizzeria = new Pizzeria();

    expect(() => pizzeria.cerrarPedido()).toThrow(new Error("Debe haber un pedido activo"));
});

test("cuando se trata de agregar una pizza, sin ningun pedido abierto entonces la accion falla", () => {
    const pizzeria = new Pizzeria();

    expect(() => pizzeria.agregarPizza([])).toThrow(new Error("Debe haber un pedido activo"));
});

test("cuando se trata de iniciar un pedido, teniendo uno activo entonces la accion falla", () => {
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(() => pizzeria.iniciarPedido()).toThrow(new Error("Ya existe un pedido activo"));
});

test("cuando no hay pedido en curso, el costo del pedido en curso es 0", () => {
    const pizzeria = new Pizzeria();

    expect(pizzeria.costoPedidoEnCurso()).toBe(0);
});

test("cuando se agrega una pizza sin toppings el costo del pedido es 10000", ()=> {
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();

    pizzeria.agregarPizza([]);

    expect(pizzeria.costoPedidoEnCurso()).toBe(10000);
});

test("cuando se agrega dos pizza sin toppings el costo del pedido es 20000", ()=> {
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();

    pizzeria.agregarPizza([]);
    pizzeria.agregarPizza([]);

    expect(pizzeria.costoPedidoEnCurso()).toBe(20000);
});

test("cuando no hay pedidos cerrados, la cantidad de pedidos cerrados es 0", ()=>{
    const pizzeria = new Pizzeria();

    expect(pizzeria.cantidadDePedidosCerrados()).toBe(0);
});

test("cuando se cierra un pedido los pedidos cerrados aumentan en 1", ()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");

    pizzeria.cerrarPedido()

    expect(pizzeria.cantidadDePedidosCerrados()).toBe(1);
});

test("cuando se cierran 2 pedidos los pedidos cerrados aumentan en 2", ()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.cantidadDePedidosCerrados()).toBe(2);
});


test("cuando se cierra un pedido, se puede volver a abrir otro", ()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(()=>pizzeria.iniciarPedido()).not.toThrow(new Error("Ya existe un pedido activo"));
});


test("Cuando hay pedidos cerrados, la recaudacion total es igual a la cantidad de pizzas pedidas", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();
    // recuerdo el descuento de 20%
    expect(pizzeria.obtenerRecaudacionTotal()).toBe(16000);
});

test("Cuando no hay pedidos cerrados, la recaudacion total es 0", ()=>{
    const pizzeria = new Pizzeria();

    expect(pizzeria.obtenerRecaudacionTotal()).toBe(0);
});

test("Cuando el pedido se cierra, el costoPedidoEnCurso vuelve a 0", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.costoPedidoEnCurso()).toBe(0);
});

test("Cuando una pizza tiene jamon como topping su valor aumenta en 5000", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Jamon"]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();
    //recuerodo descuento de 20%
    expect(pizzeria.obtenerRecaudacionTotal()).toBe(12000);
});

test("Cuando multiples pizzas tienen multiples toppings su valor aumenta respectivamente", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Anana", "Jamon"]);
    pizzeria.agregarPizza(["Jamon"]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.obtenerRecaudacionTotal()).toBe((20000 + 4000 + 5000 + 5000)*0.8);
});

test("cuando se agregan 2 toppings identicos a la misma pizza, el sistema falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["Jamon", "Jamon"])).toThrow(new Error("La pizza no puede contener toppings duplicados"))
});

test("Cuando la pizza contiene sardinas se suman 6000 al costo base", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Sardinas"]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.obtenerRecaudacionTotal()).toBe(16000*0.8);
});

test("Cuando la pizza contiene Roquefort se suman 8000 al costo base", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Roquefort"]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.obtenerRecaudacionTotal()).toBe(18000*0.8);
});

test("Cuando la pizza contiene Provolone se suman 7000 al costo base", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Provolone"]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();

    expect(pizzeria.obtenerRecaudacionTotal()).toBe(17000*0.8);
});

test("Cuando la pizza contiene Provolone multiples veces, entonces falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["Provolone", "Provolone"])).toThrow(new Error("La pizza no puede contener toppings duplicados"))
});


test("Cuando la pizza contiene Roquefort multiples veces, entonces falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["Roquefort", "Roquefort"])).toThrow(new Error("La pizza no puede contener toppings duplicados"))
});

test("Cuando la pizza contiene Anana multiples veces, entonces falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["Anana", "Anana"])).toThrow(new Error("La pizza no puede contener toppings duplicados"))
});

test("Cuando la pizza contiene Sardinas multiples veces, entonces falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["Sardinas","Jamon","Sardinas"])).toThrow(new Error("La pizza no puede contener toppings duplicados"))
});

test("Cuando se agrega un topping invalido, entonces falla", ()=>{
    const pizzeria = new Pizzeria();

    pizzeria.iniciarPedido();

    expect(()=> pizzeria.agregarPizza(["ToppingInvalido"])).toThrow(new Error("Topping invalido: ToppingInvalido"))
});



test("Si el cliente paga con tarjeta de credito y el monto es menor de 15000 da error",()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    expect(() => pizzeria.metodoDePago("Tarjeta")).toThrow("El precio del pedido es menor a 15000 no se puede pagar con tarjeta")
})

test("Si el cliente paga con tarjeta de credito y el monto es igual de 15000 se debe poder",()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza(["Jamon"]);
    pizzeria.metodoDePago("Efectivo")
    expect(pizzeria.costoPedidoEnCurso()).toBe(15000)
})

test("Si el cliente paga con efectivo pizza sin toppings la recaudaciontotal ded una sola pizza 8000 ",()=>{
    const pizzeria = new Pizzeria();
    pizzeria.iniciarPedido();
    pizzeria.agregarPizza([]);
    pizzeria.metodoDePago("Efectivo");
    pizzeria.cerrarPedido();
    expect(pizzeria.obtenerRecaudacionTotal()).toBe(8000)
})