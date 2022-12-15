/*
  objetos literarios 
  São representações em código de um elemento da vida real
  existem propriedades dentro do objeto 
   um objeto usa o {}
   dentro do objeto pode se ter um metodo ( função ou class)

   Nos dá a opção de criar um objeto por meio de uma função construtura.
   A função construtura nos permite montar um molde, e então criar todos os objetos de que precisamos

   uma função construtora começa sempre em maiusculo 

   JSON (Javascript Object Notation) é um padrão de texto usado para se comunicar entre sistemas.
   JSON não suporta metodos 

   Modulos 
   Com eles é possível criar blocos de código,que podem ser reutilizados em diversos lugares e contextos.
   Assim, podemos criá-los com responsabilidades determinadas e utilizar em conjunto com outros módulos para realizar tarefas mais complexas.
   
   arquivo.js 
   const a = 'a'
   const b = 'a'
   expor a 

   arquivo.js 
   import a 
   console.log(a)

   modulos nativos = já vem instalados quando criamos um projeto de Node.js 
   Modulos de terceiros = podemos instalá-los usando gerenciador de pacotes npm, que vamos conhecer mais adiante 
   Modulos criados = que nós mesmos criamos 
*/

let pais = { 
    nome: 'Brasil', 
    populacao: 20000, 
    capital: 'Brasilia', 
    dizerNacionalidade: function() { 
        return 'Nasci no ' + this.nome; 
    }
}; 

console.log(pais); 
console.log(pais.nome); 
console.log(pais['capital']); 
console.log(pais.dizerNacionalidade());

let carro = { 
    marca: 'Fiat', 
    modelo: 'Uno',
}

function Carro(valorMarca, valorModelo){ 
    this.marca = valorMarca; 
    this.modelo = valorModelo;
}

let meuCarro = new Carro ('Ford', 'Falcon'); 

let pessoa = { 
    nome: 'vinicius', 
    idade: 21,
}

let json = JSON.stringify(pessoa); 

// stringify coloca em texto json e parse de texto a objeto

let objetoDeNovo = JSON.parse(json);

/*

let series = [ 'Friends', 'Mr.Robot', 'Breaking Bad'];
module.exports = series; 

++ leitura e escrita de codigo 

*/

/* 

   Funções Avançadas 
   Arrow Functions só funcionam através de variaveis e são sempre anonimas

   CallBacks = é uma função que passa como parâmetro outra função

   Métodos avançados de arrays = map, filter, reduce, forEach
   
*/

const somar = () => { 
    console.log('estou em uma arrow funcion')
}

const adicionar = (numeroA, numeroB) => numeroA +  numeroB;

const calculadora = (numeroA,numeroB, operacao) => operacao(numeroA,numeroB); 

console.log(calculadora(10,20,somar));

/* 
  Exemplo de conta do banco
*/

