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

    });

    $("#footer").load("./src/footer.html");
});
