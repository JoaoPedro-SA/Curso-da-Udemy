// Exemplo de acesso ao documento Window
var windowDocument = window;

// Exemplo de acesso ao documento DOM
var domDocument = document.documentElement;

// Exemplo de acesso a um elemento específico
var element = document.getElementById('meuElemento');

// Exemplo de acesso ao formulário
var form = document.forms[0];

// Exemplo de acesso à localização do documento
var url = location.href;

// Exemplo de acesso aos cookies do documento
var cookies = document.cookie;

// Exemplo de acesso às informações do navegador
var browserInfo = navigator.userAgent;

// Exemplo de criação de um documento XML
var xmlDocument = new XML;


document.getElementById('elementId').innerHTML = 'Novo conteúdo';

// Criar um novo elemento e adicioná-lo ao documento
var newElement = document.createElement('div');
newElement.textContent = 'Novo elemento';
document.body.appendChild(newElement);

// Abrir uma nova janela do navegador
window.open('https://www.example.com', '_blank');

// Recarregar a página atual
window.location.reload();

// Fechar a janela atual
window.close();

// Acessar o nó pai de um elemento
var parentElement = document.getElementById('childElement').parentNode;

// Acessar e modificar um atributo de um elemento
var linkElement = document.querySelector('a');
linkElement.setAttribute('href', 'https://www.example.com');

// Remover um elemento do DOM
var elementToRemove = document.getElementById('elementId');
elementToRemove.parentNode.removeChild(elementToRemove);

document.forms[0].elements['fieldName'].value = 'Novo valor';

// Enviar um formulário
document.forms[0].submit();

// Resetar os campos de um formulário
document.forms[0].reset();

// Redirecionar para uma nova URL
location.href = 'https://www.example.com';

// Obter o hostname do documento atual
var hostname = location.hostname;

// Obter os parâmetros da URL
var queryParams = location.search;

// Criar um novo cookie
document.cookie = "nome=valor; expires=data; path=path";

// Obter o valor de um cookie
var cookieValue = document.cookie;

// Excluir um cookie
document.cookie = "nome=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=path";

// Obter o nome do navegador
var browserName = navigator.appName;

// Obter a versão do navegador
var browserVersion = navigator

// Obter o conteúdo de um parágrafo com id 'myParagraph'
var conteudo = document.getElementById('myParagraph').innerHTML;

// Modificar o conteúdo de um parágrafo com id 'myParagraph'
document.getElementById('myParagraph').innerHTML = 'Novo conteúdo do parágrafo';

var newDiv = document.createElement('div');

// Adicionar atributos ao novo elemento
newDiv.setAttribute('id', 'myDiv');
newDiv.setAttribute('class', 'myClass');

// Definir o conteúdo do novo elemento
newDiv.innerHTML = 'Conteúdo do novo elemento';

// Adicionar o novo elemento ao body do documento
document.body.appendChild(newDiv);

// Obter o href da localização atual
var href = window.location.href;

// Obter o hostname da localização atual
var hostname = window.location.hostname;

// Obter a hash da localização atual
var hash = window.location.hash;

// Criar um cookie com nome, valor e data de expiração
document.cookie = "nomeCookie=valorCookie; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/";

// Acessar o valor de um cookie
var valorCookie = document.cookie;

// Excluir um cookie, definindo uma data de expiração passada
document.cookie = "nomeCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";