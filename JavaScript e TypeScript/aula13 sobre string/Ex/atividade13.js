const nome = prompt(`digite seu nome completo`);
console.log(nome);
document.body.innerHTML += `O seu nome é: ${nome}<br/>`; 
document.body.innerHTML += `O seu nome é: ${nome}<br/>`; 

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome ${nome.slice(-3, nome.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;
