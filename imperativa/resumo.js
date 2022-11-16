/* 

&& - e
|| - ou

Controles de Fluxo 
if/else

if - algo verdadeiro 
else - algo negativo

//if/else aninhado
if() { 
    console.log("Aluno aprovado com sucesso")
} else if(){ 
    console.log("Aluno reprovado!")
} else { 
    console.log('aluno recuperação')
}

switch/case - escolher uma entre várias opções 

caso seja a opção x: fazer alguma coisa 
caso não seja nenhuma das opções: fazer alguma coisa também 

*/ 

//template strings
let pedido = 'Pizza'; 
console.log(`A opção escolhida foi a: ${pedido}`); 
//pode quebrar linha

//importação e requição do módulo a ser utilizado





console.log(`

  Bem-vindo ao nosso cardápio 
  Temos as seguintes opções: 

  1 - X-tudo 
  2 - Lagosta 

`)


/*
switch(opcao){ 
    case '1': 
    console.log('escolheu X-tudo');
    break; 
    case '2': 
    console.log('Escolheu Lagoste'); 
    break; 
    default: 
    console.log("Nenhuma opção");
}

console.log('Fim do programa')
*/

if(opcao === '1'){ 
    console.log('Escolheu X-tudo'); 
} else if(opcao === '2'){ 
    console.log("Escolheu lagosta"); 
} else { 
    console.log("Opção inválida"); 
}



function microonds( opcao, tempo){ 
  


}

microondas (6,8); 


let opcao = readlineSync.question('Qual a opção escolhida?');
console.log( "A opção escolhida foi:" + microondas (1, 10));