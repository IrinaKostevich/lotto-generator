import getLottos from './services/lotto.js';
import generateRandomGame from './services/game.js';
import { createBallsListElement } from './ui/render-page.js';
import { createDomOptions } from './utils/dom-utils.js';

const selectorContainer = document.getElementById('js-lotto-game-select');
const rangeInputElement = document.getElementById('js-range-input');
const rangeOutputElement = document.getElementById('js-range-output');
const lottoContainer = document.getElementById('js-lotto-container');

const lottoConfigs = new Map();

export async function getGameOptions() {
    const lottos = await getLottos();

    for (const lotto of lottos) {
        lottoConfigs.set(lotto.id, lotto.config);
    }

    const optionsList = createDomOptions(lottos, lotto => lotto.id, lotto => lotto.name);

    selectorContainer.append(...optionsList);
}

export async function generateGame(optionNumber, numbersCount) {
    const currentConfig = lottoConfigs.get(Number(optionNumber));
    currentConfig.numbersCount = Number(numbersCount);

    const lottoSet = await generateRandomGame(currentConfig);
    const lottoElement = createBallsListElement(lottoSet);

    // clear old numbers, if there are any
    if (lottoContainer.childNodes.length !== 0) {
        lottoContainer.removeChild(lottoContainer.firstChild);
    }

    lottoContainer.append(lottoElement);
}

function getBallsDefaultCount(selectedItemValue) {
    const currentConfig = lottoConfigs.get(Number(selectedItemValue));
    const ballsDefaultCount = currentConfig.numbersCount;

    return ballsDefaultCount;
}

function getConfigMaxNumber(selectedItemValue) {
    const currentConfig = lottoConfigs.get(Number(selectedItemValue));
    const configMaxNumber = currentConfig.maxNumber;

    return configMaxNumber;
}

export function updateDefaultRange(selectedItemValue) {
    const value = getBallsDefaultCount(selectedItemValue);
    const maxValue = Math.floor(getConfigMaxNumber(selectedItemValue) / 2);

    rangeInputElement.setAttribute('value', value);
    rangeInputElement.setAttribute('max', maxValue);
    rangeOutputElement.value = value;
}
