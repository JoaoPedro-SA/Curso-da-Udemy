function mostraHora() {
     let data = new Date();
     
     return data.toLocaleTimeString('pt-BR' , {
          hour12: false

     });
}

/*
function funcaDoInterval(){
     console.log(mostraHora());
}
*/

const timer = setInterval(() => {console.log(mostraHora())},1000);

setTimeout(function(){
     clearInterval(timer);
     
}, 10000);


