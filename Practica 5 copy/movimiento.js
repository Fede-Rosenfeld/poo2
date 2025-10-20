const W = require("./w.js");
const A = require("./a.js");
const S = require("./s.js");
const D = require("./d.js");


Movimiento = function(caso,rover){
    switch(caso){
        case 'w':
            res= new W(rover);
            break;
        
        case 's':
            res= new S(rover);
            break;
        
        case 'd':
            res= new D(rover);
            break;
        case 'a':
            res= new A(rover);
            break;
        default:
            throw console.error("MOVIMIENTO INVALIDO");
            
    }
    return res;
}

module.exports=Movimiento;