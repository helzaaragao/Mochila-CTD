let nome = "José da Silva";
let idade =  27; 
let peso = 83.5;
let altura = 1.70; 
let temPlano = true;
let naoPlano = false;  
let imc = peso/(altura**2); 

console.log( nome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc.toFixed(2) ); 

// Booleano - true ou false

nome = "Carol";
idade =  28; 
peso = 50;
altura = 1.80; 
temPlano = true;
naoPlano = false;  
imc = peso/(altura**2); 

console.log( nome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc.toFixed(2) ); 


/* 
    
       Função - Bloco de código que pode ser executado sempre que necessário
       promovem a reutilização de código!
      
       Declaração de função: 
       function - palavra reserva
       nomeClaratura - nome que queremos na função
       () onde vamos poder passar alguns parametros, caso necessário
       altura - um parametro 
       peso - outro parametro
       Parametros - informações que podem ser passadas para a função, sempre que necessário

       momuke - Mover(Oeste)
       
*/  

function calculoImc(nome,idade,altura,peso){ 
        const IMC = peso/(altura**2); 
        console.log( nome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc.toFixed(2)); 

}

// chamada/ Execução 

calculoImc("Carlos de Souza", 28, 1.76, 80.1);
calculoImc("Aline Ferreira", 45, 1.80, 80.1);

function soma(v1,v2){ 
        return v1 + v2; 
}



function subtrai(v1,v2){ 
        return v1 - v2; 
}




function multiplica(v1,v2){ 
        return v1 * v2; 
}



function divide(v1,v2){ 
        return v1 / v2; 
}

console.log("Soma -->" + soma(40,2));

console.log("Substrai -->" + substrai(40,2));

console.log("Multiplicar -->" + multiplica(40,2));

console.log("Divide -->" + divide(40,2));




