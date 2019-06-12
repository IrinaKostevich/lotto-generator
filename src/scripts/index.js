import LottoStorage from './services/lotto-storage.js';
import getLottos from './services/lotto.js';
import generateRandomGame from './services/game.js';
import * as page from './ui/page.js';
import queryElements from './elements.js';

let elements = null;
const lottoStorage = new LottoStorage();

async function onLottoSelectChange(event) {
    const selectedLottoId = Number(event.target.value);

    if (selectedLottoId === 0) {
        elements.gameControlsElement.setAttribute('style', 'display: none');
    } else {
        elements.gameControlsElement.removeAttribute('style');

        const lotto = lottoStorage.getLotto(selectedLottoId);
        page.updateRangeElementForConfig(elements.rangeInputElement, elements.rangeOutputElement, lotto.config);

        const numbers = await generateRandomGame(lotto.config);
        page.updateBallListElement(elements.ballListElement, numbers);
    }
}

function onBallsCountChange(event) {
    page.updateRangeOutput(elements.rangeOutputElement, event.target.value);
}

async function onNextClick() {
    const selectedLottoId = Number(elements.lottoSelectElement.value);
    const numbersCount = elements.rangeInputElement.valueAsNumber;
    const lotto = lottoStorage.getLotto(selectedLottoId);

    const numbers = await generateRandomGame({ ...lotto.config, numbersCount });
    page.updateBallListElement(elements.ballListElement, numbers);
}

async function main() {
    const lottos = await getLottos();
    lottoStorage.saveLottos(lottos);

    elements = queryElements();

    page.fillLottoSelectElement(elements.lottoSelectElement, lottos);

    elements.lottoSelectElement.addEventListener('change', event => onLottoSelectChange(event));
    elements.rangeInputElement.addEventListener('change', event => onBallsCountChange(event));
    elements.nextButton.addEventListener('click', event => onNextClick(event));
}

main();
