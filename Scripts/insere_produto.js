document.addEventListener('DOMContentLoaded', function() {

    const inputImg = document.querySelector("#mainImgJogo");
    const mainImg = document.querySelector(".main-image");
    const gameMain = document.querySelector("#main");
    const imgTxt = "Escolha uma imagem de capa";

    const inputNome = document.querySelector("#nomeJogo");
    const outputNome = document.querySelector('#nmJogo');

    const inputPreco = document.querySelector("#preco");
    const outputPreco = document.querySelector('#precoJogo');
    const gratis = "Gratuito p/ jogar";

    mainImg.innerHTML = imgTxt; 
    outputPreco.textContent = gratis;
    
    inputImg.addEventListener('change', function(e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('main-img');
                gameMain.src = readerTarget.result;

                mainImg.innerHTML = '';

                mainImg.appendChild(img);
            });

            reader.readAsDataURL(file);
        }
        else {
            mainImg.innerHTML = imgTxt;
            gameMain.src = './src/games/img/default.webp'
        }
    });
    inputNome.addEventListener('input', function(){
        outputNome.textContent = inputNome.value;
    });
    // inputPreco.addEventListener('input', function(){
        
        
    //     if(inputPreco == 0){
    //         outputPreco.textContent = "Gratuito p/ jogar";
    //     } 
    //     else {
    //         outputPreco.textContent = inputPreco.value;
    //     }
    // });

});

