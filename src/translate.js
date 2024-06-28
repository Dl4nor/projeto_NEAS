document.addEventListener('DOMContentLoaded', function() {
    var languageLink = document.getElementById('language-link');
    var body = document.body;
  
    // Função para alternar idioma
    function changeLanguage(lang) {
      body.classList.remove('texto-inglês', 'texto-español'); // Remove as classes existentes
      if (lang === 'inglês') {
        body.classList.add('texto-inglês');
      } else if (lang === 'español') {
        body.classList.add('texto-español');
      }
    }
  
    // Event listener para o link de idioma
    languageLink.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      var currentLang = body.className.includes('texto-inglês')? 'inglês' : 'español';
      changeLanguage(currentLang === 'inglês'? 'español' : 'inglês');
    });
  });
  