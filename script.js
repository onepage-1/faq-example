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
{ question: 'O que é Share?', answer: 'é um indicador que mede a participação de uma empresa em um determinado setor.' },
{ question: 'Por que o Market Share é tão importante?', answer: 'Ao acompanhar como essa quota aumenta ou diminui ao longo do tempo, as organizações têm um bom indicativo se suas campanhas de Marketing e ações relacionadas ao planejamento estratégico estão tendo o efeito desejado ou não. Enquanto o aumento do Market Share pode ser um bom sinal, a sua diminuição pode significar que é preciso agir para conter a pressão da concorrência.' },
{ question: 'Quais são os critérios para definir seu market share?', answer: 'O ideal é utilizar diversos fatores para ter uma percepção mais completa do tamanho do seu mercado de atuação. Dessa forma, você terá referências que se cruzam com precisão, gerando um panorama cada vez mais detalhado.' }
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
