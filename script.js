const quizQuestions = [
    {
        question: "Qual é o benefício do consumo de alimentos orgânicos?",
        answers: [
            "São mais baratos",
            "Reduzem o uso de agrotóxicos",
            "Duram mais tempo",
        ],
        correct: 1,
    },
    {
        question: "Qual dessas práticas é mais sustentável?",
        answers: [
            "Usar sacolas plásticas",
            "Reciclar lixo",
            "Deixar as luzes acesas",
        ],
        correct: 1,
    },
    {
        question: "O que é energia renovável?",
        answers: [
            "Energia que nunca acaba",
            "Energia de fontes como sol e vento",
            "Energia gerada por combustíveis fósseis",
        ],
        correct: 1,
    },
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    questionEl.textContent = question.question;
    answersEl.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });
}

function checkAnswer(index) {
    const question = quizQuestions[currentQuestion];
    if (index === question.correct) {
        alert("Correto!");
    } else {
        alert("Errado! Tente novamente.");
    }
    nextButton.style.display = "block";
}

nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        alert("Você completou o quiz!");
        currentQuestion = 0; // Reinicia o quiz
        loadQuestion();
    }
};

loadQuestion();
