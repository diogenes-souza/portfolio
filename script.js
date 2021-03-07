//Variável que recebe a div da classe hamburger
let hamburger = document.querySelector(".hamburger")

//A variavel hamburger fica esperando um evento de click
//Quando receber um click, adiciona a classe show-menu (toggle=ativa/desativa)
hamburger.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
})