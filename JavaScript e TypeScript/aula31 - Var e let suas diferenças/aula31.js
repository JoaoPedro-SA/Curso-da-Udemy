const verdadeira = true;

 let nome = `luiz` ; 
 var nome2 = "João";

if (verdadeira) {
     let  nome = 'Otavio';
     console.log(`${nome} ${nome2}`)
}

if (verdadeira){
     let nome = 'pedro';
     var nome2 = "luiz"
     console.log("")
     console.log(`${nome} ${nome2}`)
}
// a variavel pode ser redeclarada dentro de um if e talves numa funcitio
 casa = () => {
     console.log('Ola mundo')

     if (verdadeira){
          let nome = 'pedro';
          var nome2 = "luiz"
          console.log("")
          console.log(`${nome} ${nome2}`)
     }
}

casa()