
factorial=function(numero){
    if(numero==0 || numero==1){
        return 1;
    }
    producto=1
    while(numero>1){
        producto*=numero;
        numero--;
    }
    return producto
}

module.exports=factorial