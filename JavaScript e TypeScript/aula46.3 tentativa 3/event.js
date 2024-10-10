const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

let h = 0;
let m = 0;
let s = 0;
let sentido;
let stop;
let interval;
relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

// função para iniciar e para o relogio
Relogio = () => {
  
     if (s < 59 ){
          s = s + 1;    
          relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; 
             if (m < 59 && s == 59){
               m++;
               s = 0;              
              if (h < 24 && m == 59){
                   h++;
                   m = 0;
               
           }
          }
     }
  return h,m,s;
}

function loop(i,i2){
     if (i === true && i2 === 1){
          interval = setInterval (() => {
               Relogio();
               return false
               
          }, 1000);  
     }
     else{
          return false, i2 = -1;
     }
     
}

// BOTOES 
i = 0;
iniciar.addEventListener('click', () => {
    stop = true;
    if (stop === true){
     i++;
    relogio.style.color = 'black';
    stop, i = loop(stop,i);  
    }

});

zerar.addEventListener('click', () => {
     clearInterval(interval);
     stop = false;
     relogio.style.color = 'black';
     s = 0;
     m = 0;
     h = 0;
     i = 0;
     relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
});

pausar.addEventListener('click', () => {
     stop = true;
     clearInterval(interval);
     relogio.style.color = 'red';   
     loop(false);
     i = 0;

});




