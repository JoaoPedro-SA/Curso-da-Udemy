let a = 'A';
let b = 'B';
let c = 'C';

console.log(a,b,c);

numero = [ 1 , 2 ,3 ];
[a,b,c] = numero;
console.log( a,b,c);

numero = [0 , 1000 ,2000 ,3000 ,4000,5000 ,6000 ,7,8 ,9 , 10 ,11 ,12 ,13, 14 ,15];

console.log(numero);

numero += 22;

console.log(numero);

const [ primeiroN,segundoN, ...resto] = numero;
console.log(primeiroN,segundoN ,'👇⚠');

// hmmmmmmm 
numeros = [ [ 1 , 2 , 3] , [ 4 ,5 ,6] , [ 7 , 8, 9]];
console .log(numeros[1][0]);