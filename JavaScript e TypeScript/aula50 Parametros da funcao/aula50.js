function funcao(){
     console.log(arguments);
     console.log("///" + arguments[0]);
}
funcao('valor',1,2,4,5,2,531,51,12,124,124);

function soma(){
     let total = 0;
     for (let argumento of arguments){
          total += argumento;
     }

     console.log(total);
}
soma (1,2,4,5,6,13,64,46,3,2,21,5,6,34,3,13,6,31,2,"0.42");

mostraNumeros = (a,b,c = 40,d = 10 ,e = 20,f) => {
     console.log(a,b,c,d,e,f);
}

mostraNumeros(1,2,undefined,4,) // so o ultimo parametro que vai fica completamente vazio.

function FormaNome ({nome,sobrenome,idade}){
     console.log(nome,sobrenome,idade);
}

let obj = {nome:'João', sobrenome:'Silva',idade: 19};
FormaNome(obj)

FormaNome({nome:'Pedro', sobrenome:'Antunes',idade: 36})

function SomaNumero (operador,acumulador,...numero){
     for (let nume of numero ) {
          if (operador === "+") { acumulador += nume;};
          if (operador === "-") { acumulador -= nume;};
          if (operador === "*") { acumulador *= nume;};
          if (operador === "/") { acumulador /= nume;};
}
     console.log(acumulador)
}

SomaNumero('/',5,0,4,2,5,6,1,2,6,7,3,7,98,4,43,2);