/* 5 eventos { 
    onmouseover = mover em cima do elemento, 
    onclick = quando clica no 1, aparecer um alerta pedindo mais informações,
    onkeydown = executa no teclado para baixo e seleciona um dos números 
}   */

// 1 evento
let num1 = document.querySelector(".rating-single"); 
num1.onclick = function() { 
    return prompt("Você clicou em um feedback muito baixo, poderia dá mais detalhes para melhoramos?")
}

// 2 e 3 eventos 
let numeros = document.querySelectorAll(".rating-single")

for (let i = 0; i <= numeros.length; i++) {
    const element = numeros[i];
    element.onmouseover = function() {
        element.style.backgroundColor = "white"
    }
    element.onmouseout = function () {
        element.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
}



document.addEventListener("keydown", function(apertar)  {
    if(apertar.key === 5) {
      return alert("APERTOU 5");
    }
    });


/*

let num5 =  document.querySelector(".rating-single")[4]; 
num5.onkeydown = function(event){ 
       return num5.style.backgroundColor = "white"
}

*/





 /*

 
 let numeros = document.querySelectorAll(".rating-single"); 

numeros.forEach(element => {
    numeros.onmouseover = function() {
       numeros.style.backgroundColor = "red";
      
       }
});
*/

