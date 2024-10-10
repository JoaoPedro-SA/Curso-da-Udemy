const nome = [' João Pedro Silva Antuens🛑', 'Luiz','Herrique','Luiz'];

for (let i in nome){
     console.log(nome[i]);
}

console.log('#####')

for (let valor of nome){
     console.log(valor);
}
console.log('#####')

nome.forEach(function(valor,indice,array){
     console.log(valor,indice,array)
});