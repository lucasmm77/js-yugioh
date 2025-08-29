// Game State
const state = {
    score: {
        playerWins: 0,
        playerLosses: 0,
    },
    cards: [
        { id: 1, name: "Dark Magician", attribute: "Dark", attack: 2500, defense: 2100, image: "./src/assets/icons/magician.png" },
        { id: 2, name: "Blue-Eyes White Dragon", attribute: "Light", attack: 3000, defense: 2500, image: "./src/assets/icons/dragon.png" },
        { id: 3, name: "Exodia", attribute: "Fire", attack: 2400, defense: 2000, image: "./src/assets/icons/exodia.png" },
    ],
    playerHand: [],
    opponentHand: [],
    playerSelectedCard: null,
    opponentSelectedCard: null,
};

// HTML Elements
const audio = document.getElementById('bgm');
const scoreboard = document.querySelector('.scoreboard span');
const playerCardImage = document.getElementById('player-card-image');
const playerCardText = document.getElementById('player-card-text');
const playerHandContainer = document.getElementById('player-hand');
const opponentHandContainer = document.getElementById('opponent-hand');
const playerCardSlot = document.getElementById('player-card-slot');
const opponentCardSlot = document.getElementById('opponent-card-slot');

// Caminho para a imagem do verso da carta
const cardBackImage = "./src/assets/icons/card-back.png";

// --- Game Logic ---
function drawCards() {
    state.playerHand = [];
    state.opponentHand = [];

    // Gera 5 cartas aleatórias para o jogador
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * state.cards.length);
        state.playerHand.push(state.cards[randomIndex]);
    }

    // Gera 5 cartas aleatórias para o oponente
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * state.cards.length);
        state.opponentHand.push(state.cards[randomIndex]);
    }
}

function renderHands() {
    // Renderiza a mão do jogador com as cartas viradas para baixo
    renderHand(state.playerHand, playerHandContainer, 'player', true);
    // Renderiza a mão do oponente com as cartas viradas para baixo
    renderHand(state.opponentHand, opponentHandContainer, 'opponent', true);
}

function renderHand(hand, container, type, isFaceDown) {
    container.innerHTML = '';
    hand.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        // Usa a imagem do verso se isFaceDown for true
        const imagePath = isFaceDown ? cardBackImage : card.image;
        cardElement.innerHTML = `<img src="${imagePath}" alt="Carta de Duelo">`;

        if (type === 'player') {
            // Adiciona um listener de evento para virar a carta ao ser clicada
            cardElement.addEventListener('click', () => {
                selectCard(card, cardElement, index);
            });
        }
        container.appendChild(cardElement);
    });
}

function selectCard(card, clickedCardElement, index) {
    // Se o duelo já estiver em andamento, não faça nada
    if (state.playerSelectedCard || state.opponentSelectedCard) {
        return;
    }
    
    state.playerSelectedCard = card;
    playerCardImage.src = card.image;
    playerCardText.innerHTML = `${card.name}<br>Ataque: ${card.attack}<br>Defesa: ${card.defense}`;

    // Vira a carta selecionada no campo
    clickedCardElement.querySelector('img').src = card.image;

    // Inicia o duelo imediatamente após a seleção
    playDuel();
}

function playDuel() {
    // Sorteia uma carta para o oponente
    state.opponentSelectedCard = state.opponentHand[Math.floor(Math.random() * state.opponentHand.length)];

    // Mostra as cartas no campo
    playerCardSlot.innerHTML = `<img src="${state.playerSelectedCard.image}">`;
    opponentCardSlot.innerHTML = `<img src="${state.opponentSelectedCard.image}">`;

    // Lógica do duelo
    if (state.playerSelectedCard.attack > state.opponentSelectedCard.attack) {
        state.score.playerWins++;
        alert("Você venceu o duelo!");
    } else if (state.playerSelectedCard.attack < state.opponentSelectedCard.attack) {
        state.score.playerLosses++;
        alert("Você perdeu o duelo!");
    } else {
        alert("O duelo terminou em empate!");
    }

    updateScoreboard();
    resetDuel();
}

function resetDuel() {
    state.playerSelectedCard = null;
    state.opponentSelectedCard = null;
    setTimeout(() => {
        playerCardSlot.innerHTML = '';
        opponentCardSlot.innerHTML = '';
        playerCardImage.src = '';
        playerCardText.innerHTML = '';
        init(); // Reinicia o jogo
    }, 3000);
}

function updateScoreboard() {
    scoreboard.textContent = `Win: ${state.score.playerWins} | Lose: ${state.score.playerLosses}`;
}

function init() {
    // Toca o áudio na primeira interação do usuário com a página
    document.body.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Audio play failed:", e));
        }
    }, { once: true });

    drawCards();
    renderHands();
}

// Inicia o jogo
init();