document.addEventListener('DOMContentLoaded', function() {
    // const nomeJogo = localStorage.getItem('lsNomeJogo')
    // const divJogo = localStorage.getItem('lsDiv');


    
    let singOut = document.getElementById("login");
    var registeredUsers = [];

    //Registrando o usuário Admin
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
    
    registeredUsers = users;
    registeredUsers.push(userInfo);

    console.log(userInfo);

    var JSONregistered = JSON.stringify(registeredUsers)

    localStorage.setItem("users", JSONregistered);

    console.log(JSONregistered);
    

});