document.querySelector(".dark").style.backgroundColor = "rgb(39, 39, 39)";
document.querySelector("h1").classList.add("title");
for (let index = 0; index < 6; index++) {
    document.querySelectorAll('.item')[index].style.backgroundColor = 'rgb(19, 19, 19)';
    document.querySelectorAll('.item')[index].style.borderColor = "black";
    document.querySelectorAll('.item')[index].style.color = 'rgb(230, 230, 230)';   
};
