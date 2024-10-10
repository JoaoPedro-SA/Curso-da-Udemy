function soma(a,b) {
     return a + b;
}
function soma2(a,b) {
     console.log(a + b);
}


console.log(soma(5,2));
soma2(5,4);

function falaFrase(comeco){
     function falaResto(resto){
          return comeco +' ' + resto;
     }

     return falaResto;
}

const olaMundo = falaFrase ('Ola');
console.log(olaMundo('mundo'));

function criaMultiplicador(multiplicador){
     return function(n) {
          return n * multiplicador;
     }; 
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));