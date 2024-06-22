document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const cadastrarLink = document.getElementById('cadastrar'); 
    const esqueceuSenhaLink = document.getElementById('esqueceu_senha'); 
    const roleSelect = document.getElementById('role');
    const adminFields = document.getElementById('adminFields');
    const clientFields = document.getElementById('clientFields');

    // Exibe ou oculta os campos do administrador com base na seleção do tipo de usuário
    roleSelect.addEventListener('change', function() {
        if (this.value === 'administrador') {
            adminFields.style.display = 'block'; // Mostra os campos do administrador
        } else {
            adminFields.style.display = 'none'; // Oculta os campos do administrador
        }
    });

    // Exibe ou oculta os campos do cliente com base na seleção do tipo de usuário
    roleSelect.addEventListener('change', function() {
        if (this.value === 'cliente') {
            clientFields.style.display = 'block'; // Mostra os campos de registro do cliente
        } else {
            clientFields.style.display = 'none'; // Oculta os campos de registro do cliente
        }
    });

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

        // Lógica de validação de senha
        if (!validarSenha(senha)) {
            alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.');
            return;
        }

        // Verifica se o usuário já existe e se a senha corresponde
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(usuario => usuario.email.toLowerCase() === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            alert('Login realizado com sucesso!');
            // Redireciona para a página NEAS.html após login bem-sucedido
            window.location.href = "NEAS.html";
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    });

    cadastrarLink.addEventListener('click', function(event) {
        event.preventDefault(); // Adicionado para evitar o comportamento padrão do link
        window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
    });

    esqueceuSenhaLink.addEventListener('click', function(event) {
        event.preventDefault(); // Adicionado para evitar o comportamento padrão do link
        window.location.href = "esqueceu_senha.html"; // Redireciona para a página esqueceu senha
    });

    // Função para validar a senha
    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$%*?&])[A-Za-z\d@#$%*?&]{8,}$/;
        return regexSenha.test(senha);
    }
});
