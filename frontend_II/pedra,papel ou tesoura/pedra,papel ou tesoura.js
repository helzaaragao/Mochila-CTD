
// a função que precisa para o jogo funcionar
function playGame() {
    //Armazenar os scores 
    let playerWins = 0; 
    let computerWins = 0; 

    // Definir que enquanto ninguém tiver atingido 2 pontos, o jogo segue
    while (playerWins < 2 && computerWins < 2){ 
        //Dando as opções para o jogador
        const playerChoice = prompt("Jogador (a)! Você escolhe pedra, papel ou tesoura?"); 
        
        //caso o jogador erre as opções
        if (playerChoice !=="pedra" && playerChoice !== "papel" && playerChoice !== "tesoura"){ 
            alert("Epa! Você não sabe jogar? Essa resposta não está entre as opções!"); 
            continue;
        }

        // As opções que são validas
        const OPCOES = [ "pedra", "papel", "tesoura"];
        // A resposta do computador 
        const COMPUTEROPCAO = OPCOES[Math.floor(Math.random() * 3)]; 
    
        // resultado vai ser amazenado
        let result; 
        // O que irá devolve depende do resultado 
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

        // Avisando o jogador do resultado completo
        alert(`Você escolheu ${playerChoice}, o nosso computador escolheu ${COMPUTEROPCAO}. ${result}`);

    }
    
    // Finalizando com os alertes finais de vencedor ou perdedor
    if (playerWins > computerWins){ 
        alert("Você ganhou o jogo! Parabéns!");
    } else { 
        alert("O nosso computador ganhou de você! Quem sabe na próxima?"); 
    }
}

//utilizando a função
playGame();

