$(function () {
    $("#header").load("./src/header.html", (x) => {

        console.log("aaa")
        const users = JSON.parse(localStorage.getItem("users"));
        const userName = document.getElementById('login');

        console.log(users)

        users.map((x) => {                
            if(x.logado){
                userName.innerHTML = x.nome;
                console.log(x.nome)
            }
            else {
                userName.innerHTML = "Iniciar Sessão"
            };
        });

        userName.addEventListener("click", (x) => {
            users.map((x) => {
                if(x.logado){
                    x.logado = false;
                    localStorage.setItem("users", JSON.stringify(users));
                }
            });
        });

    });

    $("#footer").load("./src/footer.html");
});
