// Escreva uma função que recebe 2 numeros e retorne o maior deles

conta = (num1,num2) => {
     let resposta = (num1 + num2) / 2;
     return resposta 
}

maior = (num1,num2) => {
     if( num1 > num2){
          num1 = `esse e o num1 = ${num1} ele e o maior numero`;
          return num1
     }
     else{
          num2 = `esse e o num2 = ${num2} ele e o maior numero`;
          return num2
     }
}


for (let i = 0; i < 20 ; i++) {

     const r = Math.floor(Math.random() * (1 , 100) *  i);
     const r2 = Math.floor(Math.random() * (1 , 100) * i);

let num1 = r + i;
let num2 = r2 + i;
console.log(conta(num1,num2));
console.log('');
console.log(maior(num1,num2));
}