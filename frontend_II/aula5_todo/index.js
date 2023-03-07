




let listaFelinos = [
    {
        urlImagem:"./imagens/tiger.jpg",
        titulo:"O tigre",
        paragrafo:"O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão."     
    },
    { 
        urlImagem: "./imagens/leon.jpg",
        titulo:"O leão",
        paragrafo: " O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia."},
    { 
        urlImagem:"./imagens/leopardo.jpg", 
        titulo:"O leopardo",
        paragrafo:"O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso  hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra"},
        { 
            urlImagem:"/imagens/pantera-negra.jpg", 
            titulo:"A pantera negra",
            paragrafo:"A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca).Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais."},
            {
                urlImagem:"./imagens/jaguar.jpg",
                titulo:"O jaguar",
                paragrafo:"O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo)."
            },
            {
            urlImagem:"./imagens/chita.jpg", 
            titulo:"O guepardo",
            paragrafo:"O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."
            }

]; 

listaFelinos.forEach(felino => {
    let listaFelinos = `<div class="item">
    <img src="${felino.urlImagem}">
    <h2>${felino.titulo}</h2>
    <p>${felino.paragrafo}</p>
    </div>`

    let novoFelino = document.createElement('div');

    let grupoFelinos = document.getElementById("containerFelinos");

    novoFelino.innerHTML = listaFelinos;

    grupoFelinos.appendChild(novoFelino);
});


/*
function funcionar(felino) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h2 =  document.createElement("h2");
  let paragrafo = document.createElement("p");
  const containerJs = document.querySelector(".container"); 
  const itemCard = div.classList.add("item"); 
  containerJs.appendChild(itemCard);
  
  img.setAttribute("src", felino.urlImagem); 
  h2.felino.titulo; 
  paragrafo.felino.paragrafo;
}

*/




document.querySelector(".dark").style.backgroundColor = "rgb(39, 39, 39)";
document.querySelector("h1").classList.add("title");

/*
for (let i = 0; i < 6; i++) {
    document.querySelectorAll('.item')[i].style.backgroundColor = "rgb(19, 19, 19)"
    document.querySelectorAll('.item')[i].style.borderColor = "black";
    document.querySelectorAll('.item')[i].style.color = 'rgb(230, 230, 230)';   
};
*/