/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

        Passo 2 - identificar o clique no botão 

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

    Objetivo 2 - esconder o botão de mostrar mais 
        Passo 1 - pegar o botão e esconder ele 
  */

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');  

// botaoMostrarProjetos.addEventListener('click', () => {
//     //Passo 3 - adicionar a classe "ativo" nos projetos escondidos 
//     projetosInativos.forEach(projetoInativo => {
//         projetoInativo.classList.add('ativo');
//     });

//     // Objetivo 2 - esconder o botão de mostrar mais 
//     // Passo 1 - pegar o botão e esconder ele 
//     botaoMostrarProjetos.classList.add('remover');
// });

//Código refatorado:

//Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

botaoMostrarProjetos.addEventListener('click', () => {
mostrarMaisProjetos();
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
esconderBotao();
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
});
   