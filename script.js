const questions = [
    {
        question: "What is the value of x in the equation 3x + 7 = 16?",
        options: ["a) 3", "b) 9", "c) 5", "d) 2"],
        answer: "b) 9",
    },
    {
        question: "If a car travels at a constant speed of 60 kilometers per hour, how long will it take to cover 240 kilometers?",
        options: ["a) 4 hours", "b) 6 hours", "c) 3 hours", "d) 2 hours"],
        answer: "a) 4 hours",
    },
    {
        question: "If the perimeter of a rectangle is 36 centimeters and its length is 10 centimeters, what is the width of the rectangle?",
        options: ["a) 3 CM", "b) 8 CM", "c) 12 CM", "d) 18 CM"],
        answer: "a) 3 CM",
    },
    {
        question: "What is the missing number in the sequence: 2, 5, 8, __, 14?",
        options: ["a) 10", "b) 11", "c) 12", "d) 13"],
        answer: "d) 13",
    },
    {
        question: "If a right triangle has a base of 6 units and a height of 8 units, what is the length of the hypotenuse?",
        options: ["a) 10 Unit", "b) 14 Unit", "c) 5 Unit", "d) 9 Unit"],
        answer: "a) 10 Unit",
    },
    {
        question: "Which of the following is a collective noun?",
        options: ["a) Book", "b) Teacher", "c) Herd", "d) Fast"],
        answer: "c) Herd",
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["a)  Respiration", "b) Photosynthesis", "c) Digestion", "d)  Fermentation"],
        answer: "b) Photosynthesis",
    },
    {
        question: "Who was the first President of the United States?",
        options: ["a) Thomas Jefferson", "b) George Washington", "c) Abraham Lincoln", "d) Benjamin Franklin"],
        answer: "b) George Washington",
    },
    {
        question: "Which of the following is a parliamentary system of government?",
        options: ["a) United States", "b)  India", "c) China", "d) Russia"],
        answer: "b) India",
    },
    {
        question: "Who wrote the famous play Romeo and Juliet ?",
        options: ["a) Charles Dickens", "b)  Jane Austen", "c) Mark Twain", "d) William Shakespeare"],
        answer: "d) William Shakespeare",
    },
    // Add more questions in the same format
];

const optionsContainer = document.getElementById('options');
const questionText = document.getElementById('questionText');
const submitButton = document.getElementById('submit');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const startTestButton = document.getElementById('startTest');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${current.question}`;
    
    optionsContainer.innerHTML = '';

    current.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(selectedOptionIndex) {
    const current = questions[currentQuestion];
    
    if (selectedOptionIndex === current.options.indexOf(current.answer)) {
        optionsContainer.children[selectedOptionIndex].style.backgroundColor = '#5cb85c'; // Correct answer
        score++;
    } else {
        optionsContainer.children[selectedOptionIndex].style.backgroundColor = '#d9534f'; // Incorrect answer
    }

    // Disable further clicks on options
    optionsContainer.querySelectorAll('.option').forEach(opt => opt.style.pointerEvents = 'none');

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Hide the question and options
    document.querySelector('.question').style.display = 'none';

    // Display the score container
    scoreContainer.style.display = 'block';

    // Display the score
    scoreDisplay.textContent = `Your Score: ${score*10}/${(questions.length)*10}`;
}

startTestButton.addEventListener('click', () => {
    startTestButton.style.display = 'none'; // Hide the "Start Test" button
    displayQuestion();
});

