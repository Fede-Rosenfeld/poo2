Este = function(){
    this.avanzar=function(pos){
        return pos.aumentarX();
    }
    this.retroceder=function(pos){
        return pos.disminuirX();
    }
    this.rotarDerecha=function(){
        return new Sur();
    }
    this.rotarIzquierda=function(){
        return new Norte();
    }
    this.mostrarMapa=function(pos){
        pos.mostrarMapa("E")
    }
    this.clone=function(){
        return new Este();
    }
}

module.exports=Este;