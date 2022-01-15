//Capturar o botao HTML
const botao = document.querySelector('button');

//Capturar as tags HTML referentes ao primeiro personagem
const imagen1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#condicao1');

//Capturar as tags HTML referentes ao segundo personagem
const imagen2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');

//Capturar as tags HTML referentes ao terceiro personagem
const imagen3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');

//Funcao para gerar numero aleatorio
gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}