document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality
    document.querySelectorAll('.question-container').forEach(container => {
        container.addEventListener('click', () => {
            container.classList.toggle('expanded');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('#search');
    const questions = document.querySelectorAll('.question-container');

    searchInput.addEventListener('input', () => {
         const query = searchInput.value.toLowerCase();
        filterQuestions(query);
    });

      // Search functionality com o botão
      const searchButton = document.getElementById('search-button');
         searchButton.addEventListener('click', () => {
         const query = searchInput.value.toLowerCase();
         filterQuestions(query);
    });


    function filterQuestions(query){
        questions.forEach(container => {
            const question = container.querySelector('.question').textContent.toLowerCase();
            container.style.display = question.includes(query) ? 'block' : 'none';
        });
    }


    // Category filtering
    const categories = {
        'SHARE': [
            { question: 'Como compartilhar informações de maneira segura?', answer: 'Para compartilhar informações de maneira segura, utilize os canais aprovados pela empresa, como o sistema interno de arquivos e e-mail corporativo.' },
            { question: 'Quais são as políticas de compartilhamento de arquivos?', answer: 'A política de compartilhamento de arquivos da BAT Brasil exige o uso de ferramentas internas e a conformidade com as diretrizes de proteção de dados.' },
            { question: 'Como acessar a ferramenta de compartilhamento?', answer: 'A ferramenta de compartilhamento pode ser acessada através do portal do colaborador, na seção de ferramentas corporativas.' }
        ],
        'B2B': [
             { question: 'Como iniciar uma parceria B2B?', answer: 'Para iniciar uma parceria B2B, entre em contato com nosso departamento de parcerias através do formulário de contato em nosso site.' },
             { question: 'Quais são os benefícios para parceiros comerciais?', answer: 'Os benefícios para parceiros comerciais incluem acesso a recursos exclusivos, treinamentos e oportunidades de expansão conjunta.' },
             { question: 'Onde encontro as políticas para parcerias?', answer: 'As políticas para parcerias podem ser encontradas no portal do parceiro ou solicitadas diretamente ao departamento de parcerias.' }
        ],
        'EXEMPLO3': [
             { question: 'Qual é o propósito do EXEMPLO3?', answer: 'O EXEMPLO3 é um programa de desenvolvimento focado em novas tecnologias e liderança.' },
             { question: 'Como participar do programa EXEMPLO3?', answer: 'A participação no programa EXEMPLO3 é feita através de indicação ou inscrição durante os períodos abertos.' },
             { question: 'Quais são os critérios para avaliação no EXEMPLO3?', answer: 'Os critérios de avaliação no EXEMPLO3 são desempenho, participação em projetos e potencial de liderança.' }
         ],
        'EXEMPLO4': [
             { question: 'O que é o EXEMPLO4?', answer: 'O EXEMPLO4 é uma iniciativa de inovação e sustentabilidade dentro da BAT Brasil.' },
             { question: 'Como faço para me inscrever no EXEMPLO4?', answer: 'As inscrições para o EXEMPLO4 são feitas através do portal do colaborador na seção de projetos internos.' },
            { question: 'Quais benefícios o EXEMPLO4 oferece?', answer: 'O EXEMPLO4 oferece oportunidades de desenvolvimento profissional, reconhecimento e participação em projetos inovadores.' }
         ]
    };

    document.querySelectorAll('.categories button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const container = document.querySelector('.questions-container');

            container.innerHTML = `<h2>${category}</h2>`;

           categories[category].forEach(item => {
             const questionDiv = document.createElement('div');
             questionDiv.className = 'question-container';
             questionDiv.innerHTML = `
               <div class="question">${item.question}<span class="arrow">▼</span></div>
                 <div class="answer">${item.answer}</div>
               `;
                container.appendChild(questionDiv);

                 questionDiv.addEventListener('click', () => {
                 questionDiv.classList.toggle('expanded');
              });
             });
           });
      });
 });
