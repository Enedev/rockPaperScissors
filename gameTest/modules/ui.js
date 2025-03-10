import { computerPlay, playRound, playerLives, computerLives, addPlayerLife  } from './game.js';

// Function to update the game state
function updateGame(result, playerSelection, computerSelection) {
    document.getElementById('player-lives').textContent = playerLives;
    document.getElementById('computer-lives').textContent = computerLives;
    document.getElementById('result').textContent = result;

    // Pop-up
    const popup = document.getElementById('popup');
    const playerChoiceSpan = document.getElementById('player-choice');
    const computerChoiceSpan = document.getElementById('computer-choice');
    const playerImage = document.getElementById('popup-player-image');
    const computerImage = document.getElementById('popup-computer-image');

    playerChoiceSpan.textContent = playerSelection;
    computerChoiceSpan.textContent = computerSelection;

    playerImage.src = `assets/${playerSelection}.png`;
    computerImage.src = `assets/${computerSelection}.png`;

    popup.style.display = 'block';

    document.getElementById('popup-close').onclick = () => {
        popup.style.display = 'none';
    };

    if (playerLives === 0 || computerLives === 0) {
        let winnerMessage;
        if (playerLives === 0) {
            winnerMessage = 'The winner of the match is: Computer!';
        } else {
            winnerMessage = 'The winner of the match is: Player!';
        }

        document.getElementById('result').textContent = winnerMessage;

        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissors').style.pointerEvents = 'none';
    }
}

function addLife() {
    console.log("Cheats button clicked!"); 
    addPlayerLife(); 
    document.getElementById('player-lives').textContent = playerLives;
}

// Function to set up the UI
export function setupUI() {
    document.getElementById('rock').addEventListener('click', () => {
        const computerSelection = computerPlay();
        const result = playRound('rock', computerSelection);
        updateGame(result, 'rock', computerSelection);
    });

    document.getElementById('paper').addEventListener('click', () => {
        const computerSelection = computerPlay();
        const result = playRound('paper', computerSelection);
        updateGame(result, 'paper', computerSelection);
    });

    document.getElementById('scissors').addEventListener('click', () => {
        const computerSelection = computerPlay();
        const result = playRound('scissors', computerSelection);
        updateGame(result, 'scissors', computerSelection);
    });

    document.getElementById('cheats-button').addEventListener('click', addLife);
}

setupUI();