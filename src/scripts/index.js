import { getGameOptions, generateGame, updateDefaultRange } from './game.js';
import { makeOptionSelected, getCurrentOption } from './utils/dom-utils.js';

const lottoGameSelectElement = document.getElementById('js-lotto-game-select');
const rangeInputElement = document.getElementById('js-range-input');
const rangeOutputElement = document.getElementById('js-range-output');
const nextButton = document.getElementById('js-next-button');

function dropdownHandler(event) {
    const selectedItem = event.target;
    const selectedItemValue = selectedItem.value;

    makeOptionSelected(selectedItem, selectedItemValue);
    updateDefaultRange(selectedItemValue);

    const numbersCount = rangeInputElement.value;
    generateGame(selectedItemValue, numbersCount);
}

function rangeInputHandler(event) {
    rangeOutputElement.value = event.target.value;
}

function nextButtonHandler() {
    const selectedItemValue = getCurrentOption(lottoGameSelectElement).value;
    const numbersCount = rangeInputElement.value;

    generateGame(selectedItemValue, numbersCount);
}

getGameOptions()
    .then(lottoGameSelectElement.addEventListener('change', event => dropdownHandler(event)))
    .then(rangeInputElement.addEventListener('change', event => rangeInputHandler(event)))
    .then(nextButton.addEventListener('click', event => nextButtonHandler(event)))
    .catch(error => console.error(error.name, error.details));
