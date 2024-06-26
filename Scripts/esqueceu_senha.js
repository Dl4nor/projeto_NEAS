document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('esqueceuSenhaForm');
    const emailInput = document.getElementById('email');
    const novaSenhaInput = document.getElementById('novaSenha');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const novaSenha = novaSenhaInput.value.trim();

        // Verifica se a nova senha atende aos requisitos
        if (!validarSenha(novaSenha)) {
            alert('A nova senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.');
            return;
        }

        // Atualiza ou cria a entrada do usuário no localStorage
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Procura pelo usuário com base no email
        let indiceUsuario = usuarios.findIndex(usuario => usuario.email.toLowerCase() === email);

        if (indiceUsuario!== -1) {
            // Atualiza a senha do usuário existente
            usuarios[indiceUsuario].senha = novaSenha;
        } else {
            // Cria um novo usuário com o email e senha fornecidos
            usuarios.push({ email, senha: novaSenha });
        }

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Senha redefinida com sucesso. Agora você pode fazer login.');
        window.location.href = "login.html"; // Redireciona para a página de login
    });

    // Função para validar a senha
    function validarSenha(senha) {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$%*?&])[A-Za-z\d@#$%*?&]{8,}$/;
        return regexSenha.test(senha);
    }
});
