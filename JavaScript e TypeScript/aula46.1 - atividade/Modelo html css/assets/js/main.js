const relogio = document.querySelector('.time');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');

let h = 0;
let m = 0;
let s = 0;
let interval;
let opcao = true;

let data = new Date(`2000-10-02 ${h}:${m}:${s}`);

const formata_data = (num) => {
  return num < 10 ? `0${num}` : num;
};

const atualizaRelogio = () => {
  const data_formatada_time = `${formata_data(data.getHours())}:${formata_data(data.getMinutes())}:${formata_data(data.getSeconds())}`;
  relogio.innerHTML = data_formatada_time;
};

atualizaRelogio();

// Função do relógio
function Relogio() {
  s++;
  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }
  if (h === 24) {
    h = 0;
  }
  data = new Date(`2000-10-02 ${h}:${m}:${s}`);
  atualizaRelogio();
}

// Botões de INICIAR, PAUSAR E ZERAR
zerar.addEventListener('click', () => {
  relogio.style.color = 'black';
  clearInterval(interval);
  h = 0;
  m = 0;
  s = 0;
  data = new Date(`2000-10-02 ${h}:${m}:${s}`);
  atualizaRelogio();
  opcao = true;
});

iniciar.addEventListener('click', () => {
  if (opcao) {
    opcao = false;
    interval = setInterval(Relogio, 1000);
    relogio.style.color = 'black';
  }
});

pausar.addEventListener('click', () => {
  relogio.style.color = 'red';
  clearInterval(interval);
  opcao = true;
});