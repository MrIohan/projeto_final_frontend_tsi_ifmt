// 1. Pega os elementos do HTML que vamos manipular
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// 2. Adiciona um "ouvinte" de evento de clique ao ícone hamburger
hamburgerMenu.addEventListener("click", () => {
    // Adiciona ou remove a classe 'active' no próprio ícone
    // (para animá-lo para "X")
    hamburgerMenu.classList.toggle("active");

    // Adiciona ou remove a classe 'active' na lista do menu
    // (para fazê-la aparecer ou desaparecer)
    navMenu.classList.toggle("active");
});