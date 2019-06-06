import { getGameOptions, generateGame } from './game.js';
import { makeOptionSelected, getCurrentOption } from './utils/dom-utils.js';

const lottoGameSelectElement = document.getElementById('js-lotto-game-select');
const nextButton = document.getElementById('js-next-button');

function dropdownHandler(event) {
    const selectElement = event.target;
    const optionNumber = selectElement.value;

    makeOptionSelected(selectElement, optionNumber);
    generateGame(optionNumber);
}

function nextButtonHandler() {
    const optionSelectedNumber = getCurrentOption(lottoGameSelectElement).value;
    generateGame(optionSelectedNumber);
}

getGameOptions()
    .then(lottoGameSelectElement.addEventListener('change', event => dropdownHandler(event)))
    .then(nextButton.addEventListener('click', event => nextButtonHandler(event)))
    .catch(error => console.error(error.name, error.details));
