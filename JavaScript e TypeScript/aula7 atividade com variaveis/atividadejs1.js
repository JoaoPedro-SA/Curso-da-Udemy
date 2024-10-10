const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaM = 1.80;

/*
No exercício a seguir, você verá uma constante chamada de "altura" e depois modificada para "alturaEmCm", mais precisamente no seguinte trecho de código:

    const nome = 'Luiz Otávio';
    const sobrenome = 'Miranda';
    const idade = 30;
    const peso = 84;
    const alturaEmCm = 1.80; // <-- NESTE LOCAL

Na verdade, este valor (1.80) está em metros, portanto, o nome da variável deveria ser "alturaEmM".

Só vi isso na edição da aula, peço desculpas pelo erro.

O código corrigido estará disponível após a aula.

*/

// resolução 

const altura = alturaM * 100;
let altura2 = altura + 'Cm';
console.log ('O',nome,'tem a altura',altura,'centimetros ou',altura2);