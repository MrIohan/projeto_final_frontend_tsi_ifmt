    <div class="game-container">

        <div class="stats-container">
            <div class="stats-title">
                <h1>Jogo da Memória</h1>
            </div>
            <div class="stats-cont">
                <div class="stat">
                    <span>Movimentos:</span>
                    <span id="moves-counter">0</span>
                </div>
                <div class="stat">
                    <span>Tempo:</span>
                    <span id="timer">00:00</span>
                </div>
            </div>

        </div>

        <div class="game-board">
        </div>
    </div>

    <div id="victory-modal" class="modal-overlay hide">
        <div class="modal-content">
            <h2>Parabéns, você venceu!</h2>
            <p>Seu desempenho:</p>
            <p><strong>Tempo Total:</strong> <span id="final-time"></span></p>
            <p><strong>Total de Movimentos:</strong> <span id="final-moves"></span></p>
            <button id="play-again-btn">Jogar Novamente</button>
        </div>
    </div>

    <script src="/Assets/js/memoria.js"></script>