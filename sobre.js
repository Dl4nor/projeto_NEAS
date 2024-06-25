// Função para rolar a página para baixo
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight + window.scrollY,
        behavior: "smooth"
    });
}

// Event listener para o botão "Mais"
document.querySelector('.scroll-down button').addEventListener('click', function() {
    document.querySelector('.game-section').scrollIntoView({ behavior: 'smooth' });
});
