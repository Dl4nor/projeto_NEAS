document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const loginForm = document.getElementById("loginForm");
    let users = JSON.parse(localStorage.getItem("users"));
    
    // const btn = document.getElementById("loginBtn");         // <-- uso somente para testes

    // Função para validar a senha
    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$%*?&/'!_\-=+><()|])[A-Za-z0-9#@$%*?&/'!_\-=+><()|]{8,}$/;
        return regexSenha.test(senha);
    }

    // btn.addEventListener('click', function(x) {              // <-- uso somente para testes

    // Event listener para o formulário de login
    loginForm.addEventListener('submit', function(x) {
        x.preventDefault;

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

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

            if (validarSenha(senha) && dominiosValidos.includes(dominioEmail)){
                // Resto do código
            }
        }

        users.map((x) => {
            if(x.email == email && x.senha == senha){
                x.logado = true;
                alert("Bem vindo de volta ao jogo " + x.nome + "!");
                window.location.href = "./NEAS.html";
            }
            else if (x.email == email) {
                alert("Senha incorreta!");
            }
            else {
                alert("Email e senhas incorretos, verifique novamente ou crie uma nova conta!");
            }
        });
    });
});
