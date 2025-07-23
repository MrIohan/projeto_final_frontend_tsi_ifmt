// --- 1. ELEMENTOS DO DOM ---
const gameBoard = document.querySelector('.game-board');
const movesCounter = document.getElementById('moves-counter');
const timerElement = document.getElementById('timer');
const victoryModal = document.getElementById('victory-modal');
const finalTime = document.getElementById('final-time');
const finalMoves = document.getElementById('final-moves');
const playAgainBtn = document.getElementById('play-again-btn');

// --- 2. DADOS E ESTADO DO JOGO ---

// CORREÇÃO 1: Renomeamos a variável e usamos apenas nomes de arquivos de imagem.
const cardImages = ['Jessey', 'Yukiko', 'Dart', 'Luvinhas', 'Rycker', 'Kiba'];
let gameCards = [];

let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer;
let seconds = 0;
let gameStarted = false;
let lockBoard = false;

// --- 3. FUNÇÕES DO JOGO ---

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    // CORREÇÃO 2: Usamos a variável 'cardImages' que foi declarada corretamente.
    gameCards = shuffle([...cardImages, ...cardImages]);

    gameCards.forEach(imageName => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = imageName;

        // Verifique se o caminho para suas imagens está correto.
        card.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
            <div class="img">
                 <img src="${BASE_URL}/Assets/img/${imageName}" alt="Carta do Jogo">
            </div>
            <div class="text">
                <p class="img-text">${imageName}</p>
            </div>

        </div>
    `;

        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    });
}

function handleCardClick(event) {
    if (lockBoard) return;
    const clickedCard = event.currentTarget;

    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    if (clickedCard === flippedCards[0] || clickedCard.classList.contains('flipped')) {
        return;
    }

    moves++;
    movesCounter.textContent = moves;
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.image === card2.dataset.image) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    flippedCards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
    });
    matchedPairs++;
    resetTurn();

    // CORREÇÃO 3: Usamos a variável 'cardImages' para verificar a condição de vitória.
    if (matchedPairs === cardImages.length) {
        endGame();
    }
}

function unflipCards() {
    setTimeout(() => {
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
        });
        resetTurn();
    }, 1000);
}

function resetTurn() {
    flippedCards = [];
    lockBoard = false;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerElement.textContent = `${minutes}:${secs}`;
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    finalTime.textContent = timerElement.textContent;
    finalMoves.textContent = moves;
    victoryModal.classList.remove('hide');
}

playAgainBtn.addEventListener('click', () => {
    location.reload();
});


// --- 4. INICIALIZAÇÃO ---
createBoard();