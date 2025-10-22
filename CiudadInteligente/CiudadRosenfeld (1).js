

class Edificio{
    constructor(nombre, fila, columna, caracteristica){
        // primero tengo q verificar de q la posicion sea acorde a mi matriz 6x6
        if (fila < 0 || fila > 5 || columna < 0 || columna > 5) {
            throw new Error("invalida la posicion");
        }
        this.nombre = nombre;
        this.fila = fila;
        this.columna = columna;
        this.caracteristica = caracteristica;
        
        
    }

    // a la pos la meto en un arreglo q me resulta mas facil a mi
    getPosicion(){
        return [this.fila,this.columna];
    }


    getSimbolo(){
        return "nose"
        // si no tiene caracteristicas especiales va mayuscula, si tiene una
        //va en minuscala y si tiene mas de una le agrego el *
    }

    mostrarCaracteristicas(){
        if (this.caracteristica.length === 0){
           console.log("El edificio noo tiene caracterisitca especiales");
        }else{
            this.caracteristica.forEach( c => console.log(c));
        }
    }

}





class Casa extends Edificio{
    // uso sub-clase
    constructor(fila, columna,caracteristica) {
        super("Casa", fila, columna,caracteristica);
    }

    getSimbolo(){
        if(this.caracteristica.length === 0){
            return "C"
        }else if(this.caracteristica.length === 1){
            return "c"
        }else{
            return "c*"
        }
    }

}


class Hospital extends Edificio{
    // uso sub-clase
    constructor(fila, columna, caracteristica) {
        super("Hospital", fila, columna,caracteristica);
    }
    getSimbolo(){
        if(this.caracteristica.length === 0){
            return "H"
        }else if(this.caracteristica.length === 1){
            return "h"
        }else{
            return "h*"
        }
    }


}


class Mapa{
    constructor(){
        this.filas = 6;
        this.columnas = 6;
        // inicio una matriz tamaño 6x6, primero armo las filas y luego a cada fila creo un le arreglo un arreglo que seria cada columna
        // cada elemento de mi matriz va a estar vacio
        this.cuadradito = new Array(this.filas);
        for (let i = 0; i < this.filas; i++){
            this.cuadradito[i] = new Array(this.columnas);
            for (let j = 0; j < this.columnas; j++){
                this.cuadradito[i][j] = null; // vacío
            }
        }
    } 

    // una funcion booleana auxiliar que uso en colocar()
    dentroDelMapa(fila, columna) {
        return fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas;
    }
    // una funcion booleana auxiliar que uso en colocar() para ver si mi elemento de la matriz esta vacio para poder colocar un edificio
    estaVacio(fila, columna){
        return this.cuadradito[fila][columna] === null;
    }

    colocar(edificio) {
        let [f, c] = edificio.getPosicion(); // f es fila, c es columna 
        if (!this.dentroDelMapa(f, c)) {
            throw new Error("Posición fuera del mapa");
        }
        if (!this.estaVacio(f, c)){
            throw new Error(`La celda (${f}, ${c}) ya está ocupada`);
        }

        this.cuadradito[f][c] = edificio;
    }

    sacar(edificio){
        // Recorro y si encuentro el MISMO objeto, lo saco
        for (let i = 0; i < this.filas; i++){
            // busco el mismo objeto en la fila
            let j = this.cuadradito[i].indexOf(edificio);
            if (j !== -1){
                this.cuadradito[i][j] = null;
            }
        }
    }

    mostrarMapa() {
        // voy concatenando en la fula asi imprimo bien xq sino me imprime como si estuviera inyectando enters
        for (let i = 0; i < this.filas; i++) {
            // obtengo la fila completa 
            let filaArray = this.cuadradito[i];
            // convierto cada celda en " . " o el símbolo
            let filaConvertida = filaArray.map(celda => {
                if (celda === null) {
                    return " . ";
                } else {
                    return ` ${celda.getSimbolo()} `;
                }
            });
            // uno todos los elementos en una sola fila asi imprimo
            let fila = filaConvertida.join("");

            // muestro la fila completa
            console.log(fila);
        }
    }
}



let mapa = new Mapa();
console.log("MAPA SIN OBJETOS COLOCADOS: ")
mapa.mostrarMapa();
let hospital = new Hospital(0,1,[]);
let hospital2 = new Hospital(0,3,[]);
let hospitalEsp = new Hospital(2,5,["tiene aire"])
let casa = new Casa(4,3,[])
let casaEsp = new Casa(1,3,["tiene wifi", "tiene ventanall"])

console.log("MAPA CON OBJETOS COLOCADOS: ")

mapa.colocar(hospital)
mapa.colocar(hospital2)
mapa.colocar(hospitalEsp)
mapa.colocar(casa)
mapa.colocar(casaEsp)
mapa.mostrarMapa();

console.log("===== saco a un hospital ")

mapa.sacar(hospital2)
mapa.mostrarMapa();