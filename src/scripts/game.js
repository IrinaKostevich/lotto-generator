import getLottos from './services/lotto.js';
import generateRandomGame from './services/game.js';
import { createBallsListElement } from './ui/render-page.js';
import { createDomOptions } from './utils/dom-utils.js'

const lottoConfigs = new Map();

export async function getGameOptions() {
    // call lotto service
    const lottos = await getLottos();

    // save lotto configs
    for (const lotto of lottos) {
        lottoConfigs.set(lotto.id, lotto.config);
    }

    // create options list
    const optionsList = createDomOptions(lottos, lotto => lotto.id, lotto => lotto.name);

    // insert options into select dropdown
    const selectorContainer = document.getElementById('js-lotto-game-select');
    selectorContainer.append(...optionsList);
}

export async function generateGame(optionNumber) {
    // get current config
    const currentConfig = lottoConfigs.get(Number(optionNumber));

    // generate new combination of numbers
    const lottoSet = await generateRandomGame(currentConfig);

    // create html elements with numbers
    const lottoElement = createBallsListElement(lottoSet);

    const lottoContainer = document.getElementById('js-lotto-container');

    // clear old numbers, if there are any
    if (lottoContainer.childNodes.length !== 0) {
        lottoContainer.removeChild(lottoContainer.firstChild);
    }

    // insert new numbers on the page
    lottoContainer.append(lottoElement);
}
