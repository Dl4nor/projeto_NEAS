document.addEventListener('DOMContentLoaded', function() {
    // const nomeJogo = localStorage.getItem('lsNomeJogo')
    // const divJogo = localStorage.getItem('lsDiv');

    var registeredUsers = [];
    var users = JSON.parse(localStorage.getItem("users"));
    const header = document.getElementById("header");
    let singOut = document.getElementById("login");
    
    console.log('SINGOUT:', singOut)
    singOut.addEventListener("click", (x) => {
        users.map((x) => {
            if(x.logado == true) 
                singOut.innerHTML = ' ';
                x.logado = false;
        })
    });


    

    // console.log(divJogo);
    // console.log(nomeJogo);

    // if (divJogo) {
    //     document.getElementById('destaques').outerHTML += divJogo;
    //     console.log()
    // }

    users.map((x) => {
        if(x.nome != 'admin' && x.senha != 'admin'){
            let nome = "admin";
            let email = "admin";
            let senha = "admin";
            let telefone = "admin";
            let endereco = "admin";
            let isAdmin = true;
            let logado = false;

            let userInfo = {
                'nome': nome,
                'email': email,
                'senha': senha,
                'telefone': telefone,
                'endereco': endereco,
                'isAdmin': isAdmin,
                'logado': logado
            };

            registeredUsers.push(userInfo);

            console.log(userInfo);
        
            var JSONregistered = JSON.stringify(registeredUsers)
        
            localStorage.setItem("users", JSONregistered);
        
            console.log(JSONregistered);
        }

    });
    
    

});