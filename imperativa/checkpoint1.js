let readlineSync = require('readline-sync');

console.log(`
____Microondas Super Veloz___
Opções de preparos pré-definidos: 
      1 - Pipoca 
      2 - Macarrão 
      3 - Carne 
      4 - Feijão 
      5 - Brigadeiro 
`); 



 const pedido = readlineSync.question(`O que voce deseja? Coloque o numero 
 `);
 const tempoPedido = readlineSync.question(`Por quanto tempo? Coloque o numero
 `);

const timePipoca = 10
const timeMacarrao = 8 
const timeCarne = 15 
const timeFeijao = 12 
const timeBrigadeiro = 8 

function workMicro (time, optionTime){

      console.log( "Prato pronto, bom apetite!!!");
      
      if ( time > ( 3 * optionTime)){ 
            console.log ("KABUMMMMMMM");
      } else if( time > ( 2 * optionTime)) { 
            console.log("A comida queimou");
      } else if( time < optionTime) { 
            console.log ("Tempo insuficiente"); 
      }
      else { 
            console.log ("Prato perfeito!")
      }

} 




function microondas( opcao, time){ 

  if ( Number(opcao) === 1 ) { 
      workMicro(time, timePipoca);

  } else if( Number(opcao) === 2 ) { 

      workMicro(time, timeMacarrao);

  } else if ( Number(opcao)  === 3) {
      
      workMicro(time, timeCarne);

  } else if ( Number(opcao)  === 4) { 
      
      workMicro(time, timeFeijao);
      
  } else if( Number(opcao) === 5) { 
      workMicro(time, timeBrigadeiro);
      
  } else { 
      console.log ("Prato não disponivel");
  }

 
}

microondas( pedido, tempoPedido);









