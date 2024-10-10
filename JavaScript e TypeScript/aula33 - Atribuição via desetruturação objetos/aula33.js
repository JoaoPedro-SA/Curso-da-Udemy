const pessoa = {
     nome: 'Luiz',
     sobrenome: 'Miranda',
     idade: 30,
     endereco: {
          rua: 'Av brasil',
          numero: 240
     }
}
const {nome , sobrenome, idade , endereco } = pessoa;

console.log(nome ,sobrenome , idade , endereco) 

let { endereco: {rua: r , numero}} = pessoa;
console.log(r,numero);



