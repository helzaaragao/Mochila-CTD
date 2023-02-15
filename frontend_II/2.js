let coinFlip 
// Jogar a moeda e sortear uma das duas opções 

function flipCoin() { 
    return Math.floor(Math.random() * 2); 
}

// Converter resultado em string 
Math.floor(Math.random() * 3)

function playGames() {
    const numRounds = parseInt(prompt('Quantas rodadas?'))
    let score = 0; 
    for( let i = 0; i < numRounds; i++){ 
      const coinFlip = flipCoin(); 
      const coinFace = getCoinFace(coinFlip);
    }

}
           



// for in para itirar objetos literais

let carro = { 
    nome: "fox",
    ano: "2011"
}

for(let prop in carro) { 
    console.log(carro[prop]); 
}

// for of para array 
let series = [ 'Friends', 'Games of Thrones', 'Breaking Bad']; 
 
for(let valor of series){ 
    console.log(valor);
}


