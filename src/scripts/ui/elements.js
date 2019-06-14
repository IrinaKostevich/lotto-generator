import { createElement } from '../utils/dom-utils.js'

function createBallsListItemHtml(number) {
    return `
        <li class="ball">${number}</li>
    `;
}

export function createBallsListHtml(ballsNumbersSet) {
    return `
        <ul class="l-ball-list">
            ${ballsNumbersSet.map(createBallsListItemHtml).join('')}
        </ul>`;
}

export function createBallsListElement(ballsNumbersSet) {
    const html = createBallsListHtml(ballsNumbersSet);

    return createElement(html);
}
