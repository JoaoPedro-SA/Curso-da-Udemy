try{
     // E executa quando não há erros
     //console.log(a)
     console.log('abri um aquivo');
     console.log('manipulei o arquivo e gerou erro');
     console.log('fechei o arquivo');

     try{
          console.log(b);
     } catch (e2){
          console.log('deu erro');
     } finally {
          console.log('tambem sou finally.!');
     }




} catch (e) {
     // é executada quando há erros
     console.log('tratando um erro');
}   finally {
     // sempre execulta
     console.log('eu sempre sou execultado');
}

console.log('############################################################');

function retonahora(data){
     if(data && !(data instanceof Date)){
          console.log('Nãe e');
          throw new TypeError('esperando instancia de date.');
     }

     if (!data){
     data = new Date ()
     }

     return data.toLocaleTimeString('pt-BR',{
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',

     });

}

try {
     const data = new Date('01-01-1970 12:58:12');
     const hora = retonahora( 11);
     console.log(hora);
} catch(e) {
     //tratar erro
     const data = new Date('01-01-1970 12:58:12');
     console.log(data);
} finally{
     console.log('tenha um bom dia 🛑');
}
