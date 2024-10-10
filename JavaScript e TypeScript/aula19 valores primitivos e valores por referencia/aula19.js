// valores primitivos são imultaveis como exemplo string, number, boolean, undefine, null
//Exemplo
let nome = 'Luiz'
nome [0] = 'R';
console.log(nome[0],nome);


// valores  por referencias são multaveis como array, Object,function 
let a = [1,2,3];
let b = a;
a.push(4);
b.pop(4);

console.log(a,b);

b = [...a];
a.push(4);

console.log(a,b);

