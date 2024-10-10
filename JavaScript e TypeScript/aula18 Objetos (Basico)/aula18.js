const nome01 = ('Luiz');

const pessoal = {
nome: 'Luiz',
Sobrenome: `Miranda`,
idade: 25

};

const pessoal2 = {
    nome: 'Luiz',
    Sobrenome: `Mirande`,
    idade: 25
    
    };

    pessoal2.Sobrenome = " Silva Antunes";
    

console.log(pessoal.nome);
console.log(pessoal2.Sobrenome);




function criapessoa (nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa4 = criapessoa('Luiz', 'Otavio',25);
console.log(pessoa4);
console.log(pessoa4.nome);

const pessoa10 = criapessoa('Luiz', 'dOtavio',25);
const pessoa11 = criapessoa('pauiz', 'cadOtavio',25);
const pessoa12 = criapessoa('danteiz', 'matoOtavio',25);
const pessoa13 = criapessoa('pedro', 'liOtavio',25);
const pessoa14 = criapessoa('Rafa', 'tavio',25);

function gente(n,sn,i){
let pessoa = criapessoa(n,sn,i);
    return pessoa
}
console.log(gente('JoaoPedro','Silva',18));

let pessoa15 = {
    nome: "Pedro Luiz",
    idade: 55,
    
    descrever:function(){console.log(`${this.nome} tem ${this.idade}`);
   
}
}

console.log(pessoa15);
console.log(pessoa15.descrever);

console.log(pessoa15);