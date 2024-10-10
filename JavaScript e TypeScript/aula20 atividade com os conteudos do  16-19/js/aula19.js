alert(' ola mundo');

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


   /* form.onsubmit = function(evento){
       evento.preventDefault();
        alert(1);

    };
    */
   let contador = 0;
   function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form foi enviado ${contador++}`);
       

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value,sobrenome.value,peso.value,altura.value);

        pessoas.push = ({
           
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
         })

         console.log(pessoas);

         resultado.innerHTML += `<p>numero de pessoas registradas ${contador} dados ---> ${nome.value} ${sobrenome.value} ` + ` ${peso.value} ${altura.value}</p>`;

         // namoral isso foi hard demais
        


         };

   form.addEventListener('submit', recebeEventoForm);
};
 

meuEscopo();
