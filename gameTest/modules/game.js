export let playerLives = 3;
export let computerLives = 3;

export function addPlayerLife() {
    if (playerLives > 0 && computerLives > 0 && playerLives < 3) {
        playerLives++;
    }
}

export function computerPlay() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return 'rock';
    } else if (randomNum < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        computerLives--;
        return 'You win this round!';
    } else {
        playerLives--;
        return 'Computer wins this round!';
    }
}

export function resetGame() {
    playerLives = 3;
    computerLives = 3;
    document.getElementById('player-lives').textContent = playerLives;
    document.getElementById('computer-lives').textContent = computerLives;
    document.getElementById('result').textContent = '';
    document.getElementById('rock').style.pointerEvents = 'auto';
    document.getElementById('paper').style.pointerEvents = 'auto';
    document.getElementById('scissors').style.pointerEvents = 'auto';
}

resetGame();