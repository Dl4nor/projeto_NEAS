document.addEventListener('DOMContentLoaded', function() {

    const inputImg = document.querySelector("#mainImgJogo");
    const mainImg = document.querySelector(".main-image");
    const gameMain = document.querySelector("#main");
    const imgTxt = "Escolha uma imagem de capa";

    const inputNome = document.querySelector("#nomeJogo");
    const outputNome = document.querySelector('#nmJogo');

    const inputPreco = document.getElementById("preco");
    const outputPreco = document.getElementById('precoJogo');
    const gratis = "Gratuito p/ jogar";

    const inputPrint = [];
    const printImg = [];
    const outputPrint = [];
    const printTxt = "Adicione prints de exemplo";
    
    for (i=0;i<4;i++){
        inputPrint[i] = document.querySelector('#printJogo' + (i+1));
        outputPrint[i] = document.querySelector('#print' + (i+1));    
        printImg[i] = document.querySelector('.print-image' + (i+1));
        printImg[i].innerHTML = printTxt;
    };

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
            gameMain.src = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';
        }
    });

    
    inputPrint[0].addEventListener('change', function(e) {
        const inputTarget = e.target;
        const print = inputTarget.files[0];

        if (print) {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('main-img');
                outputPrint[0].src = readerTarget.result;

                printImg[0].innerHTML = '';

                printImg[0].appendChild(img);
            });

            reader.readAsDataURL(print);
        }
        else {
            printImg[0].innerHTML = printTxt;
            outputPrint[0].src = './src/games/img/default.webp'
        }
    });
  
    inputPrint[1].addEventListener('change', function(e) {
        const inputTarget = e.target;
        const print = inputTarget.files[0];

        if (print) {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('main-img');
                outputPrint[1].src = readerTarget.result;

                printImg[1].innerHTML = '';

                printImg[1].appendChild(img);
            });

            reader.readAsDataURL(print);
        }
        else {
            printImg[1].innerHTML = printTxt;
            outputPrint[1].src = './src/games/img/default.webp'
        }
    });

    inputPrint[2].addEventListener('change', function(e) {
        const inputTarget = e.target;
        const print = inputTarget.files[0];

        if (print) {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('main-img');
                outputPrint[2].src = readerTarget.result;

                printImg[2].innerHTML = '';

                printImg[2].appendChild(img);
            });

            reader.readAsDataURL(print);
        }
        else {
            printImg[2].innerHTML = printTxt;
            outputPrint[2].src = './src/games/img/default.webp'
        }
    });

    inputPrint[3].addEventListener('change', function(e) {
        const inputTarget = e.target;
        const print = inputTarget.files[0];

        if (print) {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('main-img');
                outputPrint[3].src = readerTarget.result;

                printImg[3].innerHTML = '';

                printImg[3].appendChild(img);
            });

            reader.readAsDataURL(print);
        }
        else {
            printImg[3].innerHTML = printTxt;
            outputPrint[3].src = './src/games/img/default.webp'
        }
    });

    inputNome.addEventListener('input', () => {
        outputNome.textContent = inputNome.value;
    });

    inputPreco.addEventListener('input', () => {
        if(inputPreco.value > 0){
            outputPreco.innerHTML = 'R$' + parseFloat(inputPreco.value).toFixed(2);
        } 
        else {
            outputPreco.innerHTML = gratis;
        }
    });


    let jogoCriado = document.getElementById("jogoCriado");



    jogoCriado.addEventListener('submit', (x) => {
        x.preventDefault();

        const divJogo = document.getElementById('jogoParaVenda').outerHTML;
        const nomeJogo = document.getElementById('nomeJogo').ariaLabel;

        localStorage.setItem('lsDivJogo', divJogo);
        localStorage.setItem('lsNomeJogo', nomeJogo);

        alert('Seu jogo já está a venda!!!');

        console.log(localStorage.getItem(inputNome));
        
    });
});

