document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

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

        // Adiciona o email ao armazenamento local
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ email });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso Agora você pode fazer login.');
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});
