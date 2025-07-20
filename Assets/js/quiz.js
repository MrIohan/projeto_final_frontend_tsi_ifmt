// --- 1. ELEMENTOS DO DOM ---
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// --- 2. DADOS DO QUIZ ---
// Array de objetos, cada objeto é uma pergunta
const questions = [
    {
        question: "Qual a capital do Brasil?",
        answers: [
            { text: "São Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "Belo Horizonte", correct: false },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Marte", correct: false },
            { text: "Saturno", correct: false },
            { text: "Netuno", correct: false },
            { text: "Júpiter", correct: true }
        ]
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        answers: [
            { text: "Machado de Assis", correct: false },
            { text: "Miguel de Cervantes", correct: true },
            { text: "William Shakespeare", correct: false },
            { text: "Fernando Pessoa", correct: false },
            { text: "Jorge Amado", correct: false }
        ]
    },
        {
        question: "Qual entidade é responsavél por podar as linhas temporais?",
        answers: [
            { text: "Luvicta - Entidade da vida", correct: false },
            { text: "Obiwa - Entidade da Morte", correct: false },
            { text: "Liwyd - O conceito cinza", correct: false },
            { text: "O primeiro - O primeiro a nascer", correct: false },
            { text: "Okarukta - Entidade Netralizadora", correct: true }
        ]
    }
];

// --- 3. ESTADO DO QUIZ ---
let currentQuestionIndex = 0;

// --- 4. FUNÇÕES ---

// Função para iniciar ou reiniciar o quiz
function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add("hide"); // Esconde o botão "Próxima"
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

// Função para exibir a pergunta atual
function showQuestion() {
    resetState(); // Limpa o estado anterior
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Cria e exibe os botões de resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Função para limpar os botões e classes de feedback
function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Função chamada quando uma resposta é selecionada
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        // Se a resposta está correta
        selectedBtn.classList.add("correct");
        if (questions.length > currentQuestionIndex + 1) {
            // Se ainda há perguntas, mostra o botão "Próxima"
            nextButton.classList.remove("hide");
        } else {
            // Se for a última pergunta
            questionElement.innerHTML = `Parabéns! Você completou o Quiz!`;
            nextButton.innerHTML = "Jogar Novamente";
            nextButton.classList.remove("hide");
        }
    } else {
        // Se a resposta está errada
        selectedBtn.classList.add("incorrect");
        questionElement.innerHTML = `Você errou! O quiz será reiniciado.`;
        // Mostra qual era a resposta correta
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
        nextButton.innerHTML = "Reiniciar";
        nextButton.classList.remove("hide");
    }

    // Desabilita todos os botões após uma resposta
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
}

// Função para o botão "Próxima" / "Reiniciar"
function handleNextButton() {
    if(nextButton.innerHTML === "Reiniciar" || nextButton.innerHTML === "Jogar Novamente") {
        startQuiz();
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
}


// --- 5. EVENT LISTENERS ---
nextButton.addEventListener("click", handleNextButton);

// Inicia o quiz quando a página carrega
startQuiz();