
function saudacao(nome){

return `Bom dia ${nome}! <3`

}

saudacao(`Luiz`);
console.log(saudacao('Luiz'));
console.log(saudacao('Maria'))
saudacao('Felipe');

const variavel = saudacao('João'); // metodo 1
console.log(variavel);


function soma (x,y) {

let result = x + y; 

return result;
}

console.log(soma(3,2));
console.log(soma(3,1));
console.log(soma(5,10));

const raiz = function (n) { // metodo 2
    return n ** 0.5;

};

console.log(raiz(9));
console.log(raiz(11));
console.log(raiz(24));

let sub = (n) => { // metodo 3
    return n - 10;

}

console.log(sub(46));
console.log(sub(11));
console.log(sub(5));


var soma2 = (n) => {

let a = sub(n);
let b = raiz(n);
let c = soma(n,n);           // Maneiro isso daqui

let result = n + a + b + c;

return result;

}

console.log(soma2(44));
console.log(soma2(27));


lol = (x,y) => {
z = x +y;
return z

};


console.log(lol(5,4));


(function () {
  z = 30 + 5; 
  console.log(z);
})();
// funções sem nomeação 
(() => {
    z = 60 + 40/5;
    console.log(z)
})();


