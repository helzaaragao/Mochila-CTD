//1- Adicionar ao cartão, o atributo "classe" com o valor "cartão".
document.querySelector("#tarjeta").classList.add("card"); 


//2- Acrescentar à imagem, o atributo "src" com o valor "https://www.youtube.com/img/desktop/yt_1200.png".

let imagem = document.querySelector("img")
imagem.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png");

//3- Retirar a classe que está a dar ao título uma formatação feia
document.querySelector('h1').classList.remove('titulo-feo');

//4- Verificar se a ligação ao youtube tem ou não o atributo "href".
document.querySelector('a').hasAttribute('href'); //true

//5- Obtenha o href da ligação para o wikipedia e exiba-o por consola

let wikipedia = document.getElementById("link_wikipedia");
console.log(wikipedia.getAttribute("href"));  // https://es.wikipedia.org/wiki/YouTube
