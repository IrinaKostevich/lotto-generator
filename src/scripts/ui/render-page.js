import { createElement } from '../utils/dom-utils.js'

// it's an alternative way to create DOM elements
/* function createBallDomListItem(number) {
    const listItem = document.createElement('li');
    listItem.classList.add('lotto-number');
    listItem.classList.add('l-lotto-item');
    listItem.textContent = number;

    return listItem;
}

export function createBallsDomList(ballsNumbersSet) {
    const ballsList = document.createElement('ul');
    ballsList.classList.add('l-lotto-number-list');

    const listItems = ballsNumbersSet.map(createBallDomListItem);
    ballsList.append(...listItems);

    return ballsList;
} */

function createBallsListItemHtml(number) {
    return `
        <li class="lotto-number l-lotto-item">${number}</li>
    `;
}

export function createBallsListHtml(ballsNumbersSet) {
    return `
        <ul class="l-lotto-number-list">
            ${ballsNumbersSet.map(createBallsListItemHtml).join('')}
        </ul>`;
}

export function createBallsListElement(ballsNumbersSet) {
    const html = createBallsListHtml(ballsNumbersSet);

    return createElement(html);
}
