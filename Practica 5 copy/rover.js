const Movimiento = require("./movimiento.js");
const Orientacion = require("./orientacion.js");
const Posicion = require("./posicion.js");

Rover = function(){
    this.pos=new Posicion(0,0);
    this.orientacion= new Orientacion("N");

    this.mostrarPosicion=function(){
        return this.pos.mostrar();
    }

    this.move=function(secuencia){
        oldPos=this.pos;
        oldOrientation=this.orientacion;
        secuencia=secuencia.split('');
        secuencia.forEach(char => {
            movimiento= new Movimiento(char,this);
            movimiento.execute();
        });
        if(!this.pos.esValida()){
            this.pos=oldPos;
            this.orientacion=oldOrientation
        }

    }
    
    this.mostrarMapa=function(){
        this.orientacion.mostrarMapa(this.pos)
    }

    this.avanzar=function(){
        this.pos=this.orientacion.avanzar(this.pos);
    }
    this.retroceder=function(){
        this.pos=this.orientacion.retroceder(this.pos);
    }
    this.rotarDerecha=function(){
        this.orientacion=this.orientacion.rotarDerecha();
    }
    this.rotarIzquierda=function(){
        this.orientacion=this.orientacion.rotarIzquierda();
    }


}

module.exports=Rover;