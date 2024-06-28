$(function () {
    $("#header").load("./src/header.html", (x) => {

        var userName = document.getElementById('login');
        var users = JSON.parse(localStorage.getItem("users"));
        console.log(users)
        let userFound = false;

        users.map((x) => {                
            if(x.logado){
                userName.innerHTML = x.nome;
                userFound = true;
                return
            }
        });

        if (!userFound) {
            userName.innerHTML = "Iniciar Sessão";
        }

        userName.addEventListener("click", (x) => {
            users.map((x) => {
                if(x.logado){
                    x.logado = false;
                    localStorage.setItem("users", JSON.stringify(users));
                }
            });
        });
        // Função carrinho
        let jogo = [];
        let nomeJogo = [];
        let precoJogo = [];
    
        for (let i = 0; i < 7; i++) {
            jogo[i] = document.getElementById("jogo" + (i + 1));
            nomeJogo[i] = document.getElementById("nomeJogo" + (i + 1));
            precoJogo[i] = document.getElementById("precoJogo" + (i + 1));
        }
    
        let carrinho = document.getElementById("carrinho");
    
        if (!carrinho) {
            console.error("Elemento 'carrinho' não encontrado!");
            return;
        }
    
        function jogoToCarrinho(nome, preco) {
            const jogoCarrinho = document.createElement('a');
            jogoCarrinho.innerHTML = nome + ' - ' + preco;
            jogoCarrinho.setAttribute('href', '#');
            carrinho.appendChild(jogoCarrinho);
        }
    
        jogo.forEach((j, index) => {
            if (j) { // Verificando se o jogo não é null
                j.addEventListener('click', function() {
                    const nome = nomeJogo[index] ? nomeJogo[index].innerText : "Nome desconhecido";
                    const preco = precoJogo[index] ? precoJogo[index].innerText : "Preço desconhecido";
                    jogoToCarrinho(nome, preco);
                });
            }
        });

    });

    $("#footer").load("./src/footer.html");
});
