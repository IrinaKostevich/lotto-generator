export function createElement(html) {
    const element = document.createElement('div');

    element.innerHTML = html;

    return element.firstElementChild;
}

export function createDomOptions(options, valueAccessor, textAccessor) {
    const optionsList = [];

    for (const option of options) {
        const optionElement = document.createElement('option');
        optionElement.value = valueAccessor(option);
        optionElement.innerText = textAccessor(option);

        optionsList.push(optionElement);
    }

    return optionsList;
}

export function makeOptionSelected(selectElement, optionValue) {
    const targetOptionElement = selectElement.querySelector(`option[value="${optionValue}"]`);

    for (const child of Array.from(selectElement.children)) {
        if (child === targetOptionElement) {
            targetOptionElement.setAttribute('selected', true);
        } else if (child.hasAttribute('selected')) {
            child.removeAttribute('selected');
        }
    }
}

export function getCurrentOption(selectElement) {
    return selectElement.querySelector('option[selected]');
}
