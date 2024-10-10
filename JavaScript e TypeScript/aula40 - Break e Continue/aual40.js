 const numeros = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 for (let numero of numeros){


     if (numero === 2 || numero === 5 || numero === 10){
          console.log('pulei esse numero')
          continue;
     }

     if( numero === 17){
          console.log('FIn do array determinado pelo break')
          break;
     }

     console.log(numero);
 }