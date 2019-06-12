import { createBallsListElement } from './elements.js';
import { createDomOptions } from '../utils/dom-utils.js';


export function fillLottoSelectElement(selectElement, lottos) {
    const optionsList = createDomOptions(lottos, lotto => lotto.id, lotto => lotto.name);

    selectElement.append(...optionsList);
}

export function updateRangeOutput(outputElement, value) {
    outputElement.value = value;
}

export function updateRangeElementForConfig(rangeElement, outputElement, config) {
    const value = config.numbersCount;
    const maxValue = Math.floor(config.maxNumber / 2);

    rangeElement.setAttribute('max', maxValue);
    rangeElement.value = value;

    updateRangeOutput(outputElement, value);
}

export function updateBallListElement(ballListElement, numbers) {
    ballListElement.innerHTML = createBallsListElement(numbers).outerHTML;
}
