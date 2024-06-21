document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha'); // Adiciona referência ao input da senha

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim(); // Obtém a senha digitada pelo usuário

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

        // Verifica se a senha atende aos requisitos
        if (!validarSenha(senha)) {
            alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.');
            return;
        }

        // Adiciona o email e a senha ao armazenamento local
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ email, senha }); // Armazena ambos, email e senha
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso Agora você pode fazer login.');
        window.location.href = "login.html"; // Redireciona para a página de login
    });

    // Função para validar a senha
    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$%*?&])[A-Za-z\d@#$%*?&]{8,}$/;
        return regexSenha.test(senha);
    }
});
