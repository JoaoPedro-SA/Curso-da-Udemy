const input = document.querySelector(".input");
const button = document.querySelector(".button");
let lista = document.querySelector(".lista");

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpa_input() {
    input.value = '';
    input.focus();
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefa() {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let li of liTarefas) {
        let tarefaTexto = li.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefasSalvas() {
    const listaTarefas = localStorage.getItem('tarefas');
    if (listaTarefas) {
        const listaDeTarefas = JSON.parse(listaTarefas);
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    lista.appendChild(li);
    criarBotaoApagar(li);
    salvarTarefa();
}

button.addEventListener('click', (e) => {
    if (!input.value) return;
    criaTarefa(input.value);
    limpa_input();
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
});

adicionaTarefasSalvas();


// const form = document.querySelector(".form");
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const lista = document.querySelector(".lista");

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// // Recuperar dados
// const storedData = JSON.parse(localStorage.getItem('meuDados'));
// if (storedData) {
//   lista.innerHTML = '';
//   for (const item of storedData.lista) {
//     lista.innerHTML += `<li>${item}</li>`;
//   }
// }

// button.addEventListener("click", () => {
//   const newItem = document.createElement("li");
//   newItem.textContent = input.value;
//   lista.appendChild(newItem);
//   input.value = '';

//   // Armazenar dados
//   const dados = { lista: [] };
//   for (const item of lista.children) {
//     dados.lista.push(item.textContent);
//   }
//   localStorage.setItem("meuDados", JSON.stringify(dados));
// });

// button.addEventListener("click", () => {
//      const inputValue = input.value.trim();
//      if (inputValue !== '') {
//        const newItem = document.createElement("li");
//        newItem.textContent = inputValue;
//        lista.appendChild(newItem);
//        input.value = '';
   
//        // Armazenar dados
//        const dados = { lista: [] };
//        for (const item of lista.children) {
//          dados.lista.push(item.textContent);
//        }
//        localStorage.setItem("meuDados", JSON.stringify(dados));
//      }
//    });