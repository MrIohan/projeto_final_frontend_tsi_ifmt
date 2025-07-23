
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const questions = [
    {
        question: "Qual o único reino criado por jogadores em todo o Plano Terreno?",
        answers: [
            { text: "Calamitri", correct: false },
            { text: "Zaratras", correct: false },
            { text: "Faaram", correct: true },
            { text: "Tuloniait", correct: false },
            { text: "Yorgan", correct: false }
        ]
    },
    {
        question: "Quais foram os membros originais da Mesa Antiga que participaram na segunda e terceira temporada?",
        answers: [
            { text: "Yasuke, Jack, Nea, Morgana e Meio Bardo", correct: false },
            { text: "Kiba, Dart, Kian, Sasuni, Alef, Dolphi", correct: false },
            { text: "Ubijar, Alef, Kiba, Dart, Rubi e Adam", correct: false },
            { text: "Dolphi, Kiba, Dart, Alef, Yukiko e Sasuni", correct: false },
            { text: "Adam, Alef, Dart, Kiba, Rubi e Yukiko", correct: true }
        ]
    },
    {
        question: "Qual o Símbolo do Contos Antigos?",
        answers: [
            { text: "Lua Crescente", correct: false },
            { text: "Sol Nascente", correct: true },
            { text: "Espada e Escudo", correct: false },
            { text: "A badeira de Faaram", correct: false },
            { text: "Nuvem Chuvosa", correct: false }
        ]
    },
    {
        question: "Quem foram os principais vilões do Contos Antigos?",
        answers: [
            { text: "Dridium, Lord Félix, Trianto, Hipnólogo, Bardo Amaldiçoado", correct: false },
            { text: "Kiba.", correct: false },
            { text: "Hipnólogo, Trianto, Jester, Lord Félix, Dridium", correct: false },
            { text: "Rainha Demonio, Bardo Amaldiçoado, Dridium, Hipnólogo, Lord Félix", correct: false },
            { text: "Todas as opções", correct: true }
        ]
    },
    {
        question: "Em qual RPG o Contos Antigos se inspirou primariamente?",
        answers: [
            { text: "RPG do Grack", correct: false },
            { text: "RPG do João", correct: true },
            { text: "RPG do Fox", correct: false },
            { text: "O primeiro RPG que jogou", correct: false },
            { text: "RPG do Pagode", correct: false }
        ]
    },

    {
        question: "Quem foram as maiores inspirações para o Contos Antigos até hoje?",
        answers: [
            { text: "Rafa (Kiba), Isaac (Fox) e Victor (Grack)", correct: false },
            { text: "Isaac (Fox), João e Luis", correct: false },
            { text: "Victor (Grack),  e João", correct: false },
            { text: "João, Isaac (Fox) e Victor (Grack)", correct: true },
            { text: "Isaac (Fox), Victor (Grack) e Rafa (Kiba)", correct: false }
        ]
    },

    {
        question: "Quais as formas de se tornar uma Divindade?",
        answers: [
            { text: "Ficar forte o bastante ou destruir uma", correct: true },
            { text: "Pedido para uma", correct: false },
            { text: "Sendo agraciado por uma", correct: false },
            { text: "Apenas destruindo uma", correct: false },
            { text: "Não é possivel", correct: false }
        ]
    },

    {
        question: "Qual a idade média dos Demi Seres?",
        answers: [
            { text: "De 70 a 80 anos", correct: false },
            { text: "De 800 a 900 anos", correct: false },
            { text: "De 5 a 10 anos", correct: true},
            { text: "De 230 a 250 anos", correct: false },
            { text: "De 1000 a 1400 anos", correct: false }
        ]
    }
];


let currentQuestionIndex = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add("hide");
    nextButton.innerHTML = "Próxima";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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


function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {

        selectedBtn.classList.add("correct");
        if (questions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove("hide");
        } else {
            questionElement.innerHTML = `Parabéns! Você completou o Quiz!`;
            nextButton.innerHTML = "Jogar Novamente";
            nextButton.classList.remove("hide");
        }
    } else {
        selectedBtn.classList.add("incorrect");
        questionElement.innerHTML = `Você errou! O quiz será reiniciado.`;
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
        nextButton.innerHTML = "Reiniciar";
        nextButton.classList.remove("hide");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
}


function handleNextButton() {
    if (nextButton.innerHTML === "Reiniciar" || nextButton.innerHTML === "Jogar Novamente") {
        startQuiz();
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
}


nextButton.addEventListener("click", handleNextButton);

startQuiz();