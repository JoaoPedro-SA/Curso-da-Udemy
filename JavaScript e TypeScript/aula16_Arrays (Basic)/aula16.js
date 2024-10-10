//            0123456
const nome = 'Luiz';
console.log(nome[2])

//               0         1         2
const alunos = ['Luiz' , 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);

alunos [0] = 'Eduardo';
alunos [3] = 'Luiza';
console.log(alunos);

console.log(alunos.length);// descobrir a quantidade de objetos no arrys

alunos[alunos.length] = 'Fabiana';
alunos[alunos.length] = 'Pedro'; //adiciona no fim do codigo 
console.log(alunos);

alunos.unshift('Caio'); // aciciona no inicio do codigo 
console.log(alunos); 

const removido = alunos.pop(2); // remover objetos no array.
console.log(removido);
console.log(alunos);

delete alunos[1]; // deletar o valor do objeto do array deixando em branco 
console.log (alunos)

console.log(alunos.slice(0+2));


n =  1 > null;
console.log(n)