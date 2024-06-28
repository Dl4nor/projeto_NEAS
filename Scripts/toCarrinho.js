document.addEventListener("DOMContentLoaded", (event) => {

    let jogo = [];

    const nomeJogo = [] 
    for (i=0;i<8;i++){
        nomeJogo[i] = document.getElementById("nomeJogo" + i);
    }
    

    jogoCriado.addEventListener('submit', (x) => {
        x.preventDefault();

        var mainJogo = document.getElementById("mainImgJogo").value;
        var nomeJogo = document.getElementById("nomeJogo").value;
        var precoJogo = document.getElementById("preco").value;
        var descricaoJogo = document.getElementById("descricaoJogo").value;
        var print1 = document.getElementById("printJogo1").value;
        var print2 = document.getElementById("printJogo2").value;
        var print3 = document.getElementById("printJogo3").value;
        var print4 = document.getElementById("printJogo4").value;
        
    });

});