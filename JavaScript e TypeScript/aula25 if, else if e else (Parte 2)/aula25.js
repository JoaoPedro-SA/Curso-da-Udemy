const numero = 14; 


comparação = (numero,n,x) => {

if ( numero < (n = 5)) {
    console.log(`O numero ${numero} e menor que ${n} `);
}

else if (numero >= (n = 5) && numero < (x = 10 )){

    console.log(`o ${numero} estar entre o numero ${n} e ${x}`);

}

else if (numero >= (n = 10) && numero < (x = 15 )){

    console.log(`o ${numero} estar entre o numero ${n} e ${x}`);
    
}

}

comparação(numero)