/* ? : 
funcionamento
'valor para verdadeiro' : 'Valor para falso': 


*/

let pontuação =  999;

if (pontuação >= 1000) {
    console.log('Usuario Vip')
} else{
    console.log('Usuario Normal');
}

pontuação = Number('1010');


const nivelUsuario = pontuação >= 1000 ? 'UsuarioVip': 'Usuario normal';

console.log (nivelUsuario);



pontuação = 12

const pontuação2 = pontuação >= 1000 ? 'UsuarioVip': (pontuação > 100) ? 'Usuario normal' : (pontuação === 12) ? 'Usuario de ERoo@$!!!!@...1.2.. ' : 'errwodfaodwomawomwmfoaomsomwmdoawodmwsmdmwodw' ;

console.log(pontuação2)


pontuação = 1000
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

const corUsuario2 = 'Pink';
const corPadrao2 = corUsuario2 || 'Preta';

console.log(nivelUsuario, corPadrao2);