

try {
console.log(nãoExisto);
} catch(error){
     console.log('DEU ERRO MEU CHAPA');
     console.log("41241241wfder12ddrf33rdfeqr23sa");
    // console.log(Erro)
}

function soma (x,y){
     if(typeof x !== 'number' || typeof y !== 'number'){
          throw('x e y precisam ser numeros.');
          
     }
  
     return x + y;
}

try {
console.log(soma(1,2));
console.log(soma('1',2));
} catch(error) {
     console.log("2° erro 🎶🎂🎶🎂🎶🎂")
}

//throw new ERROoooooo('x e y precisam ser numeros.');  usado para fazer um erro.