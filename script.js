document.addEventListener('DOMContentLoaded', () => {
// Dropdown functionality
document.querySelectorAll('.question-container').forEach(container => {
container.addEventListener('click', () => {
container.classList.toggle('expanded');
});
});

// Cache questions container
const questionsContainer = document.querySelector('.questions-container');

// Function to filter questions based on the query and current category
function filterQuestions(query, category) {
let questions = Array.from(questionsContainer.querySelectorAll('.question-container'));

if (category && category !== 'home') {
questions = Array.from(questionsContainer.querySelectorAll('.question-container'));
}

questions.forEach(container => {
const question = container.querySelector('.question').textContent.toLowerCase();
container.style.display = question.includes(query) ? 'block' : 'none';
});
}

// Search functionality with input
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', () => {
const query = searchInput.value.toLowerCase();
const activeCategory = questionsContainer.querySelector('h2') ? questionsContainer.querySelector('h2').textContent.toLowerCase(): "home";
filterQuestions(query, activeCategory);
});


// Search functionality with button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
const query = searchInput.value.toLowerCase();
const activeCategory = questionsContainer.querySelector('h2') ? questionsContainer.querySelector('h2').textContent.toLowerCase() : "home";
filterQuestions(query, activeCategory);
});

// Category filtering
const categories = {
'SHARE': [
{ question: 'Como compartilhar informações de maneira segura?', answer: 'Para compartilhar informações de maneira segura, utilize os canais aprovados pela empresa, como o sistema interno de arquivos e e-mail corporativo.' },
{ question: 'Quais são as políticas de compartilhamento de arquivos?', answer: 'A política de compartilhamento de arquivos da BAT Brasil exige o uso de ferramentas internas e a conformidade com as diretrizes de proteção de dados.' },
{ question: 'Como acessar a ferramenta de compartilhamento?', answer: 'A ferramenta de compartilhamento pode ser acessada através do portal do colaborador, na seção de ferramentas corporativas.' }
],
'CONECTA VOCÊ': [
{ question: 'Como iniciar uma parceria B2B?', answer: 'Para iniciar uma parceria B2B, entre em contato com nosso departamento de parcerias através do formulário de contato em nosso site.' },
{ question: 'Quais são os benefícios para parceiros comerciais?', answer: 'Os benefícios para parceiros comerciais incluem acesso a recursos exclusivos, treinamentos e oportunidades de expansão conjunta.' },
{ question: 'Onde encontro as políticas para parcerias?', answer: 'As políticas para parcerias podem ser encontradas no portal do parceiro ou solicitadas diretamente ao departamento de parcerias.' }
],
'PRIME': [
{ question: 'Qual é o propósito do Prime?', answer: 'O Prime é um programa de desenvolvimento focado em novas coisas.' },
{ question: 'Como participar do programa Prime?', answer: 'A participação no programa Prime é feita através de tal lugar.' },
{ question: 'Quais são os critérios para avaliação no Prime?', answer: 'Os critérios de avaliação no Prime são desempenho, participação em tal coisa.' }
],
'BOOST PLAN': [
{ question: 'O que é o Boost Plan?', answer: 'O Boost Plan é uma programa dentro da BAT Brasil.' },
{ question: 'Como faço para me inscrever no Boost Plan?', answer: 'As inscrições para o Boost Plan são feitas através de tal coisa' },
{ question: 'Quais benefícios do Boost Plan oferece?', answer: 'O Boost Plan oferece oportunidades.' }
]
};
document.querySelectorAll('.categories button').forEach(button => {
button.addEventListener('click', () => {
const category = button.getAttribute('data-category');
questionsContainer.innerHTML = `<h2>${category}</h2>`;

categories[category].forEach(item => {
const questionDiv = document.createElement('div');
questionDiv.className = 'question-container';
questionDiv.innerHTML = `
<div class="question">${item.question}<span class="arrow">▼</span></div>
<div class="answer">${item.answer}</div>
`;
questionsContainer.appendChild(questionDiv);

questionDiv.addEventListener('click', () => {
questionDiv.classList.toggle('expanded');
});
});

// After rendering the category questions, perform initial search
const query = searchInput.value.toLowerCase();
filterQuestions(query, category);
});
});

// Initial filter for home page
const initialQuery = searchInput.value.toLowerCase();
filterQuestions(initialQuery, "home");
});
