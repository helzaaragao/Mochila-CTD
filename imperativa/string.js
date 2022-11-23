//.length =  para saber o comprimento 

console.log("Eu sou a Helza".length); //14 

let text = "Eu sou a Helza"
console.log(text.length); //14

//.indexOf = para saber se algo existe 

console.log(text.indexOf("Helza")); //9
console.log(text.indexOf("xi")); // -1

//.slice = para pegar uma parte do texto

console.log(text.slice(4,10)); // "ou a H"

//trim() = para remover espaços em branco ( sem ser os espaços entre as palavras). 

let frase = "    Eu estou aprendendo"

console.log(frase.trim()) // eu estou aprendendo ( sem os espaços que coloquei na função)

//split('') = transforma uma string em array 

console.log(text.split(" ")) // [ 'Eu', 'sou', 'a', 'Helza' ]
console.log(text.split(" H")) // [ 'Eu sou a', 'elza' ]

//replace = para alterar uma parte do texto


console.log(text.replace('Helza', "Catarina")) // Eu sou a Catarina

// METODOS DE ARRAY 

// Os array nos permite criar um conjunto de dados ordenados | podemos ter vários tipos de dados em um mesmo array ( string, numero, boolean)

// .push() = adiciona um ou mais alementos ao final do array

let cores = [ 'Roxo', 'Laranja', 'Azul'] 

cores.push('Violeta') 

console.log(cores); // [ 'Roxo', 'Laranja', 'Azul', 'Violeta'] 

// .pop() = elimina o último elemento de um array 

console.log(cores.pop()) // Violeta 
// let cores = [ 'Roxo', Laranja, Azul] 
// console.log(cores) // sem o azul se colocar cores.pop 

//shift() = elimina o primeiro elemento de um array
console.log(cores.shift()) // Roxo

// .unshift() = adiciona um ou mais elementos ao inicio de uma array 

cores.unshift('Alegria', 'Vida')

console.log(cores); // [ 'Alegria', 'Vida', 'Laranja', 'Azul'] 

// .joing() = junta os elementos de um array usando um separador que especificamos. Se não o especificar, use virgulas. 

let separados = cores.join(" - "); 
console.log(separados);

//lastindexOf() = procura o elemento de trás para frente, no final do array até o inicio. Ele retorna a posição do ultimo para frente

console.log(cores.lastIndexOf('Laranja') )//2

// .includes() = retorna um booleano 

console.log(cores.includes('Laranja') ) // true 