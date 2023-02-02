// Vizualização de como o codigo está sendo executado
console.log("Hello World"); 
console.log('Hello, Word!');

//Tipos primitivos (Number,String, Boolean)
/* Number 
    + -> Adição 
    - -> Subtração
    / -> Divisão
    * -> Multiplacação
    % -> Resto da divisão -> 5%2 -> 2*2 + 1 = 5 então o resultado é 1 
    ** -> Exponenciação -> 2**3 -> 8 ( dois ao cubo)
    RaizQuadrada -> 4**0.5 -> Raiz de 4 -> 2
*/

console.log(1 + 5);  //6
console.log( 9 * 8 ); // 72

/* String ou Texto  
    + -> Concanetação ou junção ( prioriza a string)
    Nan = Not a Number 
*/
console.log("Meu texto 1" + " " + "Meu texto 2");
console.log('1' + 2); // 12 porque junta ( prioriza a string)
console.log('1' - 2);  // -1, não junta e consegue transformar em número
console.log('1a' - 2) // NaN, erro porque não reconhece o primeiro 


/* Variavéis -- Armazenar alguma informação na memoria do computador
   const -- Constante - um valor definido que não pode ser mais alterado
   let -- pode mudar o valor 
   var - mais antigo do let, não recomendado mais utilizar se não for requerido
    - and $ pode iniciar na nomeclatura = &outraVariavel
*/
const MINUTO = 60; // quando é const em um projeto grande costuma está em maiuscula para deixar mais evidente 
const MINHA_VARIAVEL = "minha alegria"; 
const HORA = 60*MINUTO; 
const DIA = 24+HORA; 
let outraVariavel = "Meu texto"; 
outraVariavel = "Meu texto trocado agora"; 
console.log(outraVariavel);
/* let - pega só no escopo que foi feito + pode mudar 
   var - visibilidade global, pode ser acessada fora do escopo de declaração */ 





