
factorial=function(numero){
    if(numero==0 || numero==1){
        return 1;
    }
    return numero*factorial(numero-1)
}

module.exports=factorial