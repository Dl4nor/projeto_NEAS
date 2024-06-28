document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const loginForm = document.getElementById("loginForm");
    var users = JSON.parse(localStorage.getItem("users"));

    // let users = JSON.parse(localStorage.getItem("users"));
    var registeredUsers = [];
    
    // const btn = document.getElementById("loginBtn");         // <-- uso somente para testes

    // Função para validar a senha
    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$%*?&/'!_\-=+><()|])[A-Za-z0-9#@$%*?&/'!_\-=+><()|]{8,}$/;
        return regexSenha.test(senha);
    }

    // btn.addEventListener('click', function(x) {              // <-- uso somente para testes
    // let nome = "admin";
    // let email = "admin";
    // let senha = "admin";
    // let telefone = "admin";
    // let endereco = "admin";
    // let isAdmin = true;
    // let logado = false;

    // let userInfo = {
    //     'nome': nome,
    //     'email': email,
    //     'senha': senha,
    //     'telefone': telefone,
    //     'endereco': endereco,
    //     'isAdmin': isAdmin,
    //     'logado': logado
    // };
    // registeredUsers.push(userInfo);
    
    // console.log(userInfo);

    // var JSONregistered = JSON.stringify(registeredUsers)

    // localStorage.setItem("users", JSONregistered);

    // console.log(JSONregistered);


    // Event listener para o formulário de login

    loginForm.addEventListener('submit', function(x) {
        x.preventDefault;

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        let incorreto = false;

        if(email != "admin"){
            if (!email.includes('@')) {
                alert('O email deve incluir @.');
            }

            const dominiosValidos = ['gmail.com', 'hotmail.com', 'outlook.com'];
            const dominioEmail = email.split('@')[1].toLowerCase();  

            // Verifica se o domínio do email é válido
            if (!dominiosValidos.includes(dominioEmail) && email != "admin"){
                alert('Domínio de email inválido. Por favor, use gmail.com, hotmail.com ou outlook.com');
            }

            // Lógica de validação de senha
            if (!validarSenha(senha)) {
                alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.\n\nEx.   "Exemplo#123"');
            }
        }
        users.forEach((x) => {
            if (x.email == email) {
                usuarioEncontrado = true;
                if (x.senha == senha) {

                    x.logado = true;
                    localStorage.setItem("users", JSON.stringify(users));
                    window.location.href = "/NEAS.html";
                    alert("Bem vindo de volta ao jogo " + x.nome + "!");
                    window.location.href = "/NEAS.html";

                } else {
                    // Senha incorreta
                    alert("Senha incorreta!");
                    incorreto = true;
                }
            }
        });

        if (!usuarioEncontrado) {
            alert("Email e senha incorretos, verifique novamente ou crie uma nova conta!");
        }
        
    });
});
