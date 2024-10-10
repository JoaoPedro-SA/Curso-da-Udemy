let nome = "joão pedro";
let i = 0;

while(i<10 ){
     i = i+1;
     console.log(i);
}

console.log('##############');
let x = 0;
while (x < nome.length){
     console.log(nome[x]);
     x++;
}

console.log('segue a vida');

console.log('##############');

random = (min,max) => {
     const r = Math.random() * (max - min) + min;
     return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1,50);
console.log(rand);



while(rand !== 10){
     rand = random(min,max);
     console.log(rand);
}


console.log('##########');

do{
     rand = random(min,max);
     console.log(rand);
     console.log('##########');
} while(rand !== 10);