convertir=function(n){
    // ls=[[1,'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M']];

    // ls.forEach((element,i) => {
    //     console.log(element)
    //     console.log(n)
    //     console.log(element[0]===n)
    //     if(n===element[0]){
    //         return element[1];
    //     }
    //     else if(i>0 && n==element[0]-ls[i-1][0]){
    //         return ls[i-1][1]+element[1];
    //     }
    //     else if(n < element[0]){
    //         res=ls[i-1][1]+convertir(n-ls[i-1][0]);
    //     }
    // });
    //if(n===0) {return ''}
    res='';
    const ls = {
        1: 'I',
        5: 'V',
        10:'X' ,
        50: 'L',
        100:'C',
        500:'D',
        1000:'M',
        5000:'FUERA DE LIMITE'
    }
    kls=Object.keys(ls)


    kls.forEach((element,i) => {
        if((kls[i]<=n && n<kls[i+1])){
            res = ls[element].repeat(n/element);
            res+= convertir(n%element)
            if(i+1<kls.length && n>=kls[i+1]-kls[i-i%2]){
                res=ls[kls[i-i%2]]+ls[kls[i+1]];
                res+= convertir(n-(kls[i+1]-kls[i-i%2]))
            }
        }
    });
    return res;


    // const ls2={
    //     5:'V',
    //     50:'L'
    // }
    // kls2=Object.keys(ls2)

    // 

    // if(n<5){
    //     res=ls[1].repeat(n/1)
    //     res+= convertir(n%1)
    //     if(n>=5-1){
    //         res="IV"
    //     }
    // }
    // else if(n<10){
    //     res=ls[5].repeat(n/5)
    //     res+=convertir(n%5)
    //     if(n>=10-1){
    //         res= "IX"
    //     }
    // }
    // else if(n<50){
    //     res = ls[10].repeat(n/10)
    //     res+=convertir(n%10)
    //     if(n>=50-10){
    //         res="XL"
    //         res+=convertir(n-40)
    //     }
    // }
    // return res
}

module.exports=convertir