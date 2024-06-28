// Função para alternar a descrição da carta
function toggleCardDescription(cardElement) {
    const description = cardElement.find('.description');
    const image = cardElement.find('img');

    if (cardElement.hasClass('active')) {
        description.css('display', 'none');
        image.css('display', 'block');
    } else {
        description.css('display', 'block');
        image.css('display', 'none');
    }

    cardElement.toggleClass('active');
}

// Evento de clique na imagem ou no card
$(document).ready(function() {
    $('.dev-info').on('click', function(event) {
        event.stopPropagation(); // Impede que o evento se propague para elementos pai
        toggleCardDescription($(this)); // Chama a função passando o elemento clicado
    });
});
