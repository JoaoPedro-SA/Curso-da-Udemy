let num1 = 9.54578;
let num2 = Math.floor(num1);// arrendonda o numero pra baixo 
    console.log(num2);
num2 = Math.ceil(num1); // arrendonda o numero pra cima
    console.log(num2);
num2 = Math.round(num1);// ele arrendoda o numero pro mais proximo 
    console.log(num2);
console.log(Math.max(1,2,3,4,5,6,7,8,9,1,-1,42,-425242,32141));// mostra o maior numero da lista 
console.log(Math.min(1,2,3,4,5,6,7,8,9,1,-1,42,-425242,32141));// esse mostra o menor numero da lista
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);// random faz gerar numeros aleatorio 
console.log(aleatorio);
console.log(100 / 0.000000000000);// JS não e capaz de resover por 0 dar erro 

