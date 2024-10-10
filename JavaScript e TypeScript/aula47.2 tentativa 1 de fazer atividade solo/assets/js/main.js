const input = document.querySelector(".input");
const button = document.querySelector(".button");
let lista = document.querySelector(".lista");

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        criaTarefa();
    }
})

function criarBotao(li){
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esse elemento');
    li.appendChild(botaoApagar);
}

button.addEventListener('click', criaTarefa = () => {
    if (input.value === '') return ;
    const li = document.createElement('li');
    li.textContent = input.value + '   ';
    lista.appendChild(li);
    criarBotao(li);
    salvarTarefa();
    input.value = '';
    input.focus();
})

criaTarefa2 = (x) => {
    const li = document.createElement('li');
    li.textContent = x + '   ';
    lista.appendChild(li);
    criarBotao(li);
    salvarTarefa();
}

document.addEventListener('click', (e) => {
    const qual_elemento = e.target;
    if (qual_elemento.classList.contains('apagar')){
        qual_elemento.parentElement.remove();
        salvarTarefa();
    }
})

salvarTarefa = () => {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

adiicionaTarefasSalvas = () =>{
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa2(tarefa);
    }
}

adiicionaTarefasSalvas();