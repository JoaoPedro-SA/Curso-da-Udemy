/*
Operadores Lógicos
&& -> AND -> Todas as expressoões precisam ser verdadeiras para retornar True
|| -> OR -> 
! -> NOT -> não
*/

console.log(`praticado com operador AND -> (&&) 👇👇👀`);

console.log(true && true);

n = false;

console.log(true && n && true); // comparar ser todas as opções são verdadeiras ou confirmadas ou prontas

const P1 =  (true && n && true) && (true && true && true);
console.log(P1);

const P2 =  (true && true && true) && (true && true && true);
console.log(P2);

console.log(`praticado com operador OR -> (||) 👇👇👀`);

const or2 = true || false;
console.log(or2);
const or3 = false || true;
console.log(or3);
const or4 = false || false;
console.log(or4);
const or5 = false || false || false || false || false || true;
console.log(or5);



console.log(`texte aleatorio 😜༼ つ ◕_◕ ༽つ`);

const usuario = "João";
const senha = "12345";

const vailogar = usuario === "João";

if(vailogar) {
    console.log("usuario confirmado");
    const senha2 = 12345;
    const senha3 = "12345";
    if(senha === senha2 || senha === senha3){
        console.log(`acesso permitido`)

    }
    else{console.log("erro")}


}
else{
    console.log(`erro nome incorreto`)
}

console.log("acabou a operação")

console.log("forma resumida||||||||👇||||")

const vailogar2 = usuario === "João" && senha === "12345";

console.log (vailogar2);

if(vailogar2 === true) {
    console.log (`essa e a resposta da forma resumida ☝😱☝`);
}

else{console.log("estar apresntando algum erro");}


console.log(`praticado com operador NOT -> (!) 👇👇👀`);

console.log(true);
console.log(!true);


const vailogar3 = usuario === "João" && senha === "12345";

console.log (!vailogar3);

if(!vailogar3 === !!true) {
    console.log (`essa e a resposta da forma resumida ☝😱☝`);
}

else{console.log("estar apresntando algum erro (⊙_⊙;)");}
