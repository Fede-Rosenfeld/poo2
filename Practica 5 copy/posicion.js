Posicion = function(x,y){
    this.x=x;
    this.y=y;
    this.valida=true;

    this.mostrar=()=>"X: "+this.x+"\nY: "+this.y;

    this.mostrarMapa=function(dire){
        M = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => '*'));

        linea="";
        M[99-this.y][this.x]=dire;
        M.forEach(function(fila,f){ 
            fila.forEach(
                function(pos,c){
                    linea+=(M[f][c]);
                });
            console.log(linea+"\n")
            linea="";
        });
            
    }
    this.clone=function(){
        return new Posicion(this.x,this.y);
    }
    this.esValida=function(){
        return this.valida
    }
    this.aumentarX=function(){
        if(this.x+1<100){
            return new Posicion(this.x+1,this.y);
        }
        else{
            this.valida=false;
            return this;
        }
    }
    this.disminuirX=function(){
        if(this.x-1>=0){
            return new Posicion(this.x-1,this.y);
        }
        else{
            this.valida=false;
            return this;
        }
    }
    this.aumentarY=function(){
        if(this.y+1<100){
            return new Posicion(this.x,this.y+1);
        }
        else{
            this.valida=false;
            return this;
        }
    }
    this.disminuirY=function(){
        if(this.y-1>=0){
            return new Posicion(this.x,this.y-1);
        }
        else{
            this.valida=false;
            return this;
        }
    }
    this.volverAtras=function(){
        this.valida=true;
    }
}

module.exports=Posicion;