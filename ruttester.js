const rutVerificador = (rut) => {
    let M = 0, S=0
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
    return S?S-1:'k';
}


const rutValidator = (rutCompleto) => {
rutCompleto = rutCompleto.replace("‐","-");
if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
    return false;
let tmp   = rutCompleto.split('-');
let digv  = tmp[1]; 
let rut   = tmp[0];
if ( digv == 'K' ) digv = 'k' ;

return (rutVerificador(rut) == digv );
}

console.log(rutValidator("16238882-7"))