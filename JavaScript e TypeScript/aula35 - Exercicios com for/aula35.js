// Definindo um array chamado "texto" com objetos que possuem tags HTML e frases associadas a elas
const texto =  [
     { tag: '<p>', frase: 'Frase 1'},
     {tag: '<div>', frase: 'Frase 2'},
     {tag: '<footer> ', frase: 'Frase 3'},
     {tag: '<section>' , frase: 'Frase 4' },
]

// Imprimindo no console a tag, a frase e a tag novamente do segundo elemento do array "texto"
console.log(texto[1].tag,texto[1].frase,texto[1].tag)

// Selecionando o elemento com a classe 'container'
const container = document.querySelector('.container');

// Criando um novo elemento "div"
const div = document.createElement('div');

// Executando um loop de 0 a 3
for  (let i = 0; i < 4; i++){
  // Imprimindo no console a tag, a frase e a tag novamente de cada elemento do array "texto"
  console.log(texto[i].tag,texto[i].frase,texto[i].tag);
}

// Executando um loop para cada elemento do array "texto"
for  (let x = 0; x < texto.length; x++){
     // Desestruturando o objeto para obter a tag e a frase
     let { tag , frase} = texto[x];
     
     // Criando um novo elemento com a tag "div"
     let tagCriada = document.createElement('div');

     // Definindo o conteúdo interno do elemento criado como a frase
     tagCriada.innerHTML = frase;
     
     // Adicionando o elemento ao elemento "div" criado anteriormente
     div.appendChild(tagCriada);
}

// Adicionando o elemento "div" ao elemento com a classe 'container'
container.appendChild(div);