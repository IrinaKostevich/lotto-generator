export function createElement(html) {
    const element = document.createElement('div');

    element.innerHTML = html;

    return element.firstElementChild;
}

function createDomOption(option, valueAccessor, textAccessor) {
    const optionElement = document.createElement('option');
    optionElement.value = valueAccessor(option);
    optionElement.innerText = textAccessor(option);

    return optionElement;
}

export function createDomOptions(options, valueAccessor, textAccessor) {
    const optionsList = options
        .map(option => createDomOption(option, valueAccessor, textAccessor));

    return optionsList;
}
