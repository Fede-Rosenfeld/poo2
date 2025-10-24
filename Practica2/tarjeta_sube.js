class Sube {
    static idActual = 1;
    static SALDO_MINIMO = -600;
    constructor(){
        this.identificador = Sube.idActual;
        Sube.idActual += 1;
        this.saldo = 0;
    }

    obtenerSaldo() {
        return this.saldo;
    }

    pagarViaje(costoDeViaje){
        if(this.obtenerSaldo() - costoDeViaje < Sube.SALDO_MINIMO){
            throw new Error("Saldo insuficiente");
        } 

        this.saldo -= costoDeViaje;
        return this.saldo;
    }

    cargarSaldo(monto){
        this.saldo += monto;
    }

    tenesId(identificador){
        return this.identificador === identificador
    }
}



class SistemaCentralizado {
    constructor(){
        this.cargas = [];
    };

    cargarTarjeta(id, monto){
        if(monto < 0){
            throw new Error("El monto a cargar debe ser positivo!")
        }

        this.cargas.push(new Carga(id, monto));
    }

    acreditarSaldo(tarjetaSube){
        // this.cargas = this.cargas.filter((carga) => {
        //     if (carga.sePuedeAplicarA(tarjetaSube)){
        //         carga.acreditar(tarjetaSube);
        //         return false;
        //     };
        //     return true;
        // });
        this.cargas.forEach((carga) => {
            carga.acreditar(tarjetaSube)
        });
    }

    cantidadRecargasPendientes(){

    }
}

class Carga{
    constructor(id, monto){
        this.monto = monto;
        this.id = id;
        this.estado = new Pendiente();
        this.acreditado= false; 
    }

    acreditar(tarjetaSube){
        if(this.sePuedeAplicarA(tarjetaSube)){
            this.estado.cargarSaldo(tarjetaSube, this.monto);
            this.estado = new Acreditado();
        }
    }

    sePuedeAplicarA(tarjetaSube){
        return tarjetaSube.tenesId(this.id);
    }
};

class Acreditado{
    cargarSaldo(tarjetaSube, monto){
        return;
    }
}

class Pendiente{
    cargarSaldo(tarjetaSube, monto){
       tarjetaSube.cargarSaldo(monto)
    }
}


const tarjeta1 = new Sube();
const tarjeta2 = new Sube();

const sistemaCentralizado = new SistemaCentralizado();


sistemaCentralizado.cargarTarjeta(1, 100);
sistemaCentralizado.cargarTarjeta(1, 100);
sistemaCentralizado.cargarTarjeta(1, 100);

console.log("Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes())
console.log("Acredito saldo tarjeta 2");
sistemaCentralizado.acreditarSaldo(tarjeta2);
console.log(tarjeta2.obtenerSaldo());
console.log("Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes())


console.log("Saldo tarjeta 1 antes de acreditar");
console.log(tarjeta1.obtenerSaldo());

console.log("Saldo tarjeta 1 despues de acreditar");
sistemaCentralizado.acreditarSaldo(tarjeta1);
sistemaCentralizado.acreditarSaldo(tarjeta1);
console.log(tarjeta1.obtenerSaldo());
console.log("Recargas pendientes: " + sistemaCentralizado.cantidadRecargasPendientes())


