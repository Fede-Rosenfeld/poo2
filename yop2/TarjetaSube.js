
class Sube{
    static id = 1;
    static saldoMin = -600;
    constructor(){
        this.identificador = id;
        Sube.id += 1;
        this.saldo = 0;
    } 
    obtenerSaldo(){
        return this.saldo;
    }
    pagarViaje(costoViaje){
        if(this.obtenerSaldo()-costoViaje < Sube.saldoMin){
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= costoViaje;
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
    }

    cargarTarjeta(id,monto){

    }

    acreditarSaldo(Sube obj){

    }


}