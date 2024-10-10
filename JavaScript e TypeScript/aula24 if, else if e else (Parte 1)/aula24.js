const hora = 18 ;

if (hora <= 4.80) {
    console.log(`bom noite`);
}
    else if (hora <= 12){
        console.log(`bom dia`);
    }
    else if(hora<=18) {
        console.log(`bom tarde`);
    }

    else if (hora > 24){
        console.log("erro");
    }

else{
    console.log(`boa noite`)
}

//resolução do professor 👇

const hora2 = 25;

if (hora2 >=- 0 && hora2 <= 11 ) {
    console.log('Bom dia');
}  
 else if(hora2 >= 12 && hora2 <= 17 ){
    console.log(`Boa tarde`);
}
 else if (hora2 > 18 && hora2 <= 24){
    console.log("Boa noite");
 }
 else if (hora2 >24 ){
console.log("erro")
 }
