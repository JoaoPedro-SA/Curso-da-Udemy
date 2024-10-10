const relogio = document.getElementById("relogio");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const resetar = document.getElementById("zerar");
let h = 0;
let m = 0;
let s = 0;
let interval;
let stop = true;

function atualizarRelogio() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }

    relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

relogio.textContent = "00:00:00";

resetar.addEventListener("click", () => {
    clearInterval(interval);
    h = 0;
    m = 0;
    s = 0;
    relogio.textContent = "00:00:00";
    relogio.style.color = "black";
    stop = true;
});

pausar.addEventListener("click", () => {
    clearInterval(interval);
    relogio.style.color = "red";
    stop = true;
});

iniciar.addEventListener("click", () => {
    if (stop) {
        interval = setInterval(atualizarRelogio, 1000);
        relogio.style.color = "black";
        stop = false;
    }
});
