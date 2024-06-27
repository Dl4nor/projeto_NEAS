document.addEventListener('DOMContentLoaded', function() {
    // const nomeJogo = localStorage.getItem('lsNomeJogo')
    // const divJogo = localStorage.getItem('lsDiv');


    var users = JSON.parse(localStorage.getItem("users"));
    const header = document.getElementById("header");
    let singOut = document.getElementById("login");
    var registeredUsers = [];
    
    users.map((x) => {
        if(x.email != 'admin'){
            // Registrando o usuário Admin
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
        else {
            console.log("admin já existe");
            console.log(x.nome + ' ' + x.logado);
        }

    });

});