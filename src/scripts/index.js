import generateGame from './lotto.js';

const ballsNumber = 36;
generateGame(ballsNumber);

document.getElementById('next-button').addEventListener('click', (event) => {
    generateGame(ballsNumber);
});
