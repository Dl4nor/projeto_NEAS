
document.addEventListener('DOMContentLoaded', function() {

    let register = document.getElementById("cadastroForm");
    var users = JSON.parse(localStorage.getItem("users"));
    var registeredUsers = [];
    var invalid = false;

    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$%*?&/'!_\-=+><()|])[A-Za-z0-9#@$%*?&/'!_\-=+><()|]{8,}$/;
        return regexSenha.test(senha);
    }

    register.addEventListener("submit", (x) => {
        x.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const telefone = document.getElementById("telefone");
        const endereco = document.getElementById("endereco");
        let isAdmin = false;
        let logado = true;
        let emailExiste = false;

        if (!email.value.includes('@')) {
            alert('O email deve incluir @.');
            invalid = true;
        }

        const dominiosValidos = ['gmail.com', 'hotmail.com', 'outlook.com'];
        const dominioEmail = email.value.split('@')[1].toLowerCase();  

        // Verifica se o domínio do email é válido
        if (!dominiosValidos.includes(dominioEmail)){
            alert('Domínio de email inválido. Por favor, use gmail.com, hotmail.com ou outlook.com');
            invalid = true;
        }

        // Lógica de validação de senha
        if (!validarSenha(senha.value)) {
            alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.\n\n' +
                  'Ex.   "Exemplo#123"');
            invalid = true;
        }

        users.map((x) => {
            if(x.email == email.value){
                emailExiste = true;
            }
        });

        if (emailExiste){
            alert("Email já cadastrado, esta conta já existe!");
            invalid = true;
        }

        if (validarSenha(senha.value) && dominiosValidos.includes(dominioEmail) && invalid == false){

            let userInfo = {
                'nome': nome.value,
                'email': email.value,
                'senha': senha.value,
                'telefone': telefone.value,
                'endereco': endereco.value,
                'isAdmin': isAdmin,
                'logado': logado
            };

            registeredUsers = users;
            registeredUsers.push(userInfo);
            console.log(userInfo);

            alert("TESTE")

            localStorage.setItem("users", JSON.stringify(registeredUsers));

            console.log(JSON.parse(localStorage.getItem("users")));

            alert("Seja muito bem vindo, " + nome.value + "!")
            window.location.href = "./NEAS.html";
        }
    });
});