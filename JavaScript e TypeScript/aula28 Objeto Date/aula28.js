const data = new Date();
console.log(data.toISOString())

const data2 = new Date(0);
console.log(data2.toISOString())


const data3 = new Date(-100);
console.log(data3.toISOString())


const data4 = new Date();
console.log(data4.toString())

const data5 = new Date(0);
console.log(data5.toString())


const data6 = new Date(-100);
console.log(data6.toString())


const umDia = 60 * 60 * 24 * 1000;
console.log(umDia);
const tres_horas = 60 * 60 * 3 * 1000;
console.log(tres_horas)

let data10 = new Date(0 + tres_horas - umDia);
console.log(data.toString());



// outro jeito 


console.log('outro jeito 👇' );


//Despedaçando a data'


console.log('Despedaçando a data 👇⏲⏱🕰⏰⌚' );

let date = new Date(2019,3,20,15,55,22,15);
console.log(date.toString());


console. log ('Dia', date. getDate());
console. log ('Mês', date.getMonth() + 1); //mes começa do zero
console. log ('Ano', date. getFullYear ()) ;
console. log ( 'Hora', date.getHours ()) ;
console. log ('Min', date.getMinutes ());
console. log ('Seg', date.getSeconds ( )) ;
console. log ('ms', date.getMilliseconds ()) ;
console. log ('Dia semana', date. getDay ()); // 0 domingo, 6 sábado
console. log (date.toString());

datef =  60 * 60 * 26.9999* 1000 ;
console.log(datef);
datef2 = new Date(datef);
console.log(datef2.toString());