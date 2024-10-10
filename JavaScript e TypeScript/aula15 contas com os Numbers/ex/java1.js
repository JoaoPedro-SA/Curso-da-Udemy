const numero = Number(prompt('digite seu numero'));
const numerotitulo = window.document.getElementById('numeroTitulo');
const texto = window.document.getElementById(`texto`);
let texto2 = window.document.getElementById('texto2');
numerotitulo.innerHTML = numero;
texto.innerHTML += `<p> seu numero e - 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>A Raiz quadrada: ${Math. sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro:${(Number.isInteger(numero))}</p>`;
texto.innerHTML += `<p> É NaN ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>Arredondado pra cima ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>com duas cass decimais ${numero.toFixed(2)}<p>`;

