document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const roleSelect = document.getElementById('role');

    // Função para validar o campo de seleção do tipo de usuário
    function validateRole() {
        if (!roleSelect.value) {
            alert('Por favor, selecione um tipo de usuário.');
            return false;
        }
        return true;
    }

       // Função para gerar dados CSV a partir do LocalStorage
       function generateCSVFromLocalStorage() {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        let csvData = Object.keys(userData).join(',') + '\n'; // Cabeçalho
        for (const key in userData) {
            csvData += `${key},${userData[key]}\n`; // Linhas de dados
        }
        return csvData;
    }

    // Função para baixar o arquivo CSV
    function downloadCSV(csvData, filename = "dados_usuarios") {
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename + ".csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    // Adiciona evento de submit ao formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Validação inicial
        if (!validateRole()) {
            return; // Sai da função se a validação falhar
        }

        // Coleta os valores dos campos do formulário
        const role = roleSelect.value;

        // Mostra os campos específicos para o tipo de usuário selecionado
        const adminFields = document.getElementById('adminFields');
        const clientFields = document.getElementById('clientFields');
        if (role === 'administrador') {
            adminFields.style.display = 'block';
            clientFields.style.display = 'none';
        } else if (role === 'cliente') {
            clientFields.style.display = 'block';
            adminFields.style.display = 'none';
        } else {
            alert('Tipo de usuário não reconhecido.');
            return;
        }

        // Aqui você pode adicionar mais validações conforme necessário

        // Coleta os valores dos campos específicos para cada tipo de usuário
        let userTypeFields = {};
        if (role === 'administrador') {
            userTypeFields['nome'] = document.getElementById('nome').value;
            userTypeFields['id'] = document.getElementById('id').value;
            userTypeFields['telefone'] = document.getElementById('telefone').value;
            userTypeFields['email'] = document.getElementById('email').value;
            userTypeFields['senha'] = document.getElementById('senha').value;
        } else if (role === 'cliente') {
            userTypeFields['nome'] = document.getElementById('nome').value;
            userTypeFields['cpf'] = document.getElementById('cpf').value;
            userTypeFields['telefone'] = document.getElementById('telefone').value;
            userTypeFields['client-email'] = document.getElementById('client-email').value;
            userTypeFields['endereco'] = document.getElementById('endereco').value;
            userTypeFields['client-pass'] = document.getElementById('client-pass').value;
        }

        // Salvar no LocalStorage
        localStorage.setItem('userData', JSON.stringify(userTypeFields));

        alert('Dados salvos com sucesso!');

         // Exportar para CSV
         const csvData = generateCSVFromLocalStorage();
         downloadCSV(csvData);
    });
});
