
class TarjetaSube {
    static total = 0;
    static minimo = -600;
    #id;
    #saldo;
    #saldoMinimo;
    constructor (){
        this.#id = TarjetaSube.total + 1;
        this.#saldo = 0;
        this.#saldoMinimo = TarjetaSube.minimo;
        TarjetaSube.total = TarjetaSube.total + 1;
    }

    totalTarjetasSube (){
        return console.log("Hay un total de " + TarjetaSube.total + " circulando");
    }

    consultarSaldo (){
        return console.log("Tenes " + this.#saldo + " de saldo");
    }

    cargarSaldo (montoCargado){
        this.#saldo = this.#saldo + montoCargado;
        this.consultarSaldo();
    }

    realizarViaje (costoViaje){
        if (this.#saldo - costoViaje >= this.#saldoMinimo){
            console.log("Viaje realizado");
            this.#saldo = this.#saldo - costoViaje;
            console.log ("Saldo Actualizado");
            this.consultarSaldo();
        }
        else {
            console.log ("No es posible realizar el viaje ya que no tenes saldo.")
        }
    }
}


let tarjeta1 = new TarjetaSube ();
tarjeta1.consultarSaldo();
tarjeta1.cargarSaldo(400);
tarjeta1.realizarViaje(200);
tarjeta1.totalTarjetasSube();
let tarjeta2 = new TarjetaSube ();
tarjeta1.totalTarjetasSube();