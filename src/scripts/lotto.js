function generateRandom(number) {
    const result = Math.floor((Math.random() * number) + 1);
    return result;
}

function generateLottoSet(maxNumber) {
    const lottoSet = new Set();

    while (lottoSet.size < 8) {
        lottoSet.add(generateRandom(maxNumber));
    }

    const result = Array.from(lottoSet).sort((a, b) => a - b);

    return result;
}

function createBallsDomList(ballsNumbersSet) {
    // create unordered list
    const ballsList = document.createElement('ul');
    ballsList.classList.add('l-lotto-number-list');

    const listItems = [];
    // create list items
    for (const ballNumber of ballsNumbersSet) {
        const listItem = document.createElement('li');
        listItem.classList.add('lotto-number');
        listItem.classList.add('l-lotto-item');
        listItem.textContent = ballNumber;

        listItems.push(listItem);
    }

    ballsList.append(...listItems);

    return ballsList;
}

export default function generateGame(ballsAmount) {
    const lottoSet = generateLottoSet(ballsAmount);
    const lottoUIElement = createBallsDomList(lottoSet);

    const lottoContainer = document.getElementById('lotto-container');

    if (lottoContainer.childNodes.length !== 0) {
        lottoContainer.removeChild(lottoContainer.firstChild);
    }

    lottoContainer.append(lottoUIElement);
}
