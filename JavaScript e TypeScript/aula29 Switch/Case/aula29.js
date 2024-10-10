const data = new Date('1987-04-23 00:00:00')
const diaSemana = data.getDay()
let diasemnatexto

console.log(diaSemana)
/*
if (diaSemana === 0) {
    diaSemanaTexto='Domingo';
} else if (diaSemana === 1){
    diasemnatexto = "Segunda";
} else if (diaSemana === 2){
    diasemnatexto = "Terça";
}
else if (diaSemana === 3){
    diasemnatexto = "Quarta";
}
else if (diaSemana === 4 ){
    diasemnatexto = "Quinta";
}
else if (diaSemana === 6){
    diasemnatexto = "Sexta";
}
else if (diaSemana === 7){
    diasemnatexto = 'Sabado';
} else {
    diaSemanaTexto = '';
}
*/

switch (diaSemana) {
  case 0:
    diasemnatexto = 'Domingo'
    break;
  case 1:
    diasemnatexto = 'Segunda'
    break;
  case 2:
    diasemnatexto = 'Terça'
    break;
  case 3:
    diasemnatexto = 'Quarta'
    break;
  case 4:
    diasemnatexto = 'Quinta'
    break;
  case 5:
    diasemnatexto = 'Sexta'
    break;
  case 7:
    diasemnatexto = 'Sabado'
    break;
    default:
        diasemnatexto = '';
        break;
}

console.log(diasemnatexto)



function getDiaSemanaTexto(diaSemana) {

    let diasemnatexto;
    switch (diaSemana) {
    case 0:
        diasemnatexto = 'Domingo'
        return diasemnatexto;
      case 1:
        diasemnatexto = 'Segunda'
        return diasemnatexto;
      case 2:
        diasemnatexto = 'Terça'
        return diasemnatexto;
      case 3:
        diasemnatexto = 'Quarta'
        return diasemnatexto;
      case 4:
        diasemnatexto = 'Quinta'
        return diasemnatexto;
      case 5:
        diasemnatexto = 'Sexta'
        return diasemnatexto;
      case 7:
        diasemnatexto = 'Sabado'
        return diasemnatexto;
        default:
            diasemnatexto = '';
            return diasemnatexto;

           
    }
}

console.log(diaSemana, diasemnatexto);