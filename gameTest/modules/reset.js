import { resetGame } from './game.js';

export function setupReset() {
    document.getElementById('reset-button').addEventListener('click', resetGame);
}

setupReset();