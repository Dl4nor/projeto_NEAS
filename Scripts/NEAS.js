document.addEventListener('DOMContentLoaded', function() {
    const nomeJogo = localStorage.getItem('lsNomeJogo')
    const divJogo = localStorage.getItem('lsDiv');

    console.log(divJogo);
    console.log(nomeJogo);

    if (divJogo) {
        document.getElementById('destaques').outerHTML += divJogo;
        console.log()
    }
});