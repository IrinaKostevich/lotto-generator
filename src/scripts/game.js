import getLottos from './api/lotto-api.js';
import generateRandomGame from './api/game-api.js';
import { createBallsListElement } from './ui/render-page.js';
import { createDomOptions } from './utils/dom-utils.js'

export async function getGameOptions() {
    const lottos = await getLottos();
    const optionsList = createDomOptions(lottos, lotto => lotto.id, lotto => lotto.name);

    const selectorContainer = document.getElementById('js-lotto-game-select');

    selectorContainer.append(...optionsList);
}

export async function generateGame(optionNumber) {
    const lottos = await getLottos();
    const currentLotto = lottos.filter(lotto => lotto.id === Number(optionNumber));

    const { config } = currentLotto[0];

    const lottoSet = await generateRandomGame(config);
    const lottoElement = createBallsListElement(lottoSet);

    const lottoContainer = document.getElementById('js-lotto-container');

    if (lottoContainer.childNodes.length !== 0) {
        lottoContainer.removeChild(lottoContainer.firstChild);
    }

    lottoContainer.append(lottoElement);
}
