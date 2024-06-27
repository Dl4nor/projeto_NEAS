
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

        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");
        let telefone = document.getElementById("telefone");
        let endereco = document.getElementById("endereco");
        let isAdmin = false;
        let logado = true;
 
        let userInfo = {
            'nome': nome.value,
            'email': email.value,
            'senha': senha.value,
            'telefone': telefone.value,
            'endereco': endereco.value,
            'isAdmin': isAdmin,
            'logado': logado
        };

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

        if (validarSenha(senha.value) && dominiosValidos.includes(dominioEmail)){
            users.map((x) => {
                if(x.email != email.value){
                    registeredUsers.push(userInfo);
                    console.log(userInfo);

                    var JSONregistered = JSON.stringify(registeredUsers)

                    localStorage.setItem("users", JSONregistered);
                    window.location.href = "./NEAS.html";
                }
                else {
                    alert("Email já cadastrado, esta conta já existe!");
                }
            });
        }
    });
});