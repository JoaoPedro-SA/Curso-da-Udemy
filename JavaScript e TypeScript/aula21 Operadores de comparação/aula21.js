/* 
Operadores de comparação 
> maior que 
>= maior que ou igual a
< menor que 
<= menor que ou igual a 
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

let comp = 10 > 5;
console.log(comp);

comp = 10 >= 5;
console.log(comp);

comp = 10 >= 11;
console.log(comp);

comp = 10 <= 54;
console.log(comp);

comp = 10 <= 5;
console.log(comp);

comp = 10 >= 5;
console.log(comp);

console.log(`RESULTADO dos valores de igualdade 2 👇👇`);

comp = 10 == 10; //compara so o valor 
console.log(comp);

comp = 10 ==='10'; //estar comparando o valor e o tipo
console.log(comp);

comp = 10 === parseFloat(Number('10.24')); //estar comparando o valor e o tipo, mas esse transforma o texto em numero
console.log(comp);

comp = 10 === Number('10'); //estar comparando o valor e o tipo, mas esse transforma o texto em numero
console.log(comp);

comp = 10 === '5'; // estar comparando o valor e o tipo
console.log(comp);

console.log(`valores com diferente 👇👇`);

comp = 10 != '5'; 
console.log(comp);

comp = 10 != 5 ; 
console.log(comp);

comp = 10 != '10'; 
console.log(comp);

comp = 10 != 10; 
console.log(comp);

console.log(`agora com 2 simbolos de == 👇🐱‍👤`)

comp = 11 !== '5'; 
console.log(comp);

comp = 11 !== 5 ; 
console.log(comp);

comp = 11 !== '11'; 
console.log(comp);

comp = 11 !== 11; 
console.log(comp);






