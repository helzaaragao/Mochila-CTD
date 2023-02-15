

/*Implementar uma regra de que só é declarado como ganhador, quem ganhou 2 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada rodada;
Empate no jogo, não dá pontuação para nenhum dos jogadores.

*/

function playGame() {
    let playerWins = 0; 
    let computerWins = 0; 

    while (playerWins < 2 && computerWins < 2){ 
        const playerChoice = prompt("Jogador (a)! Você escolhe pedra, papel ou tesoura?"); 

        if (playerChoice !=="pedra" && playerChoice !== "papel" && playerChoice !== "tesoura"){ 
            alert("Epa! Você não sabe jogar? Essa resposta não está entre as opções!"); 
            continue;
        }

        const OPCOES = [ "pedra", "papel", "tesoura"];
        const COMPUTEROPCAO = OPCOES[Math.floor(Math.random() * 3)]; 
    

        let result; 
        if ( playerChoice === COMPUTEROPCAO) { 
            result = "Parece que você leu  os dados do nosso computador, deu empate!"; 
        } else if (
               (playerChoice == "pedra" && COMPUTEROPCAO === "tesoura") || (playerChoice === "papel" && COMPUTEROPCAO ==="pedra") || (playerChoice === "tesoura" && COMPUTEROPCAO === "papel")
        ) { 
            playerWins++; 
            result = "Você ganhou essa rodada do computador";
        } else { 
            computerWins++ 
            result = "O computador ganhou essa rodada de você";
        }

        alert(`Você escolheu ${playerChoice}, o nosso computador escolheu ${COMPUTEROPCAO}. ${result}`);

    }

    if (playerWins > computerWins){ 
        alert("Você ganhou o jogo! Parabéns!");
    } else { 
        alert("O nosso computador ganhou de você! Quem sabe na próxima?"); 
    }
}

playGame();

