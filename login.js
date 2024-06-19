document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const cadastrarButton = document.getElementById('cadastrar');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        // Verifica se o email contém '@'
        if (!email.includes('@')) {
            alert('O email deve conter @.');
            return;
        }

        // Verifica se o domínio do email é válido
        const dominiosValidos = ['gmail.com', 'hotmail.com', 'outlook.com'];
        const dominioEmail = email.split('@')[1].toLowerCase();
        if (!dominiosValidos.includes(dominioEmail)) {
            alert('Domínio de email inválido. Por favor, use gmail.com, hotmail.com ou outlook.com.');
            return;
        }

        /*// Verifica se a senha tem pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/;
        if (!regexSenha.test(senha)) {
            alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.');
            return;
        }*/

        // Verifica se o usuário já existe
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExiste = usuarios.some(usuario => usuario.email.toLowerCase() === email);

        if (usuarioExiste) {
            alert('Login realizado com sucesso!');
           // Redireciona para a página NEAS.html após login bem-sucedido
           window.location.href = "NEAS.html";
        } else {
            alert('Este email não está cadastrado. Por favor, cadastre-se.');
            cadastrarButton.click(); // Simula um clique no botão de cadastrar
        }
    });

    cadastrarButton.addEventListener('click', function() {
        window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
    });
});
