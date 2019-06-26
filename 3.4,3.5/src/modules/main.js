const htmlElements = {};

function initHTMLElements() {
    htmlElements.selectColor = getHTMLElement('select');
    htmlElements.addButton = getHTMLElement('button.add-button');
    htmlElements.input = getHTMLElement('input.input-color');
    htmlElements.removeButton = getHTMLElement('button.remove-button');
    htmlElements.removeSelectedButton = getHTMLElement('button.remove-selected');
    htmlElements.body = document.body;
}

function initEvenHandles() {
    htmlElements.selectColor.addEventListener('change', selectColorValueChanged); //то же самое, что и https://i.imgur.com/EThboJy.png
    htmlElements.addButton.addEventListener('click', addButtonClicked); //то же самое, что и https://i.imgur.com/lQPEyrM.png
    htmlElements.removeButton.addEventListener('click', removeColorClicked); //то же самое, что и https://i.imgur.com/1BNCoem.png
    htmlElements.removeSelectedButton.addEventListener('click', removeSelectedColorClicked); //то же самое что и https://i.imgur.com/SpWNYt7.png
}

initHTMLElements();
console.log(htmlElements);
initEvenHandles();

function selectColorValueChanged() {
    let value = htmlElements.selectColor.value;
    setColor(value);
}

function addButtonClicked() {
    let newColor = htmlElements.input.value;
    if (checkIfColorCanBeAdded(htmlElements.input.value) !== true) {
        alert("There's no such a color");
    }
    else {
        if (checkIfColorAdded(htmlElements.input.value)) {
            alert('Color has been already added');
        } else {
            addColor(newColor);
            chooseColor(newColor);
            setColor(newColor);
        }
    }
}

function removeColorClicked() {
    if (isNaN(htmlElements.input.value) === false) {
        alert('Please enter a value first');
    } else {
        removeColor(htmlElements.input.value);
        reset();
    }
}


function removeSelectedColorClicked() {

    if (getSelectedValue() === 'not selected') {
        alert('Please choose a value to remove')
    } else {
        removeColor(getSelectedValue());
    }
}

function getSelectedValue() {
    let selectedIdx = htmlElements.selectColor.selectedIndex;
    return htmlElements.selectColor[selectedIdx].value;
}

function getHTMLElement(selector) {
    let element = document.querySelector(selector);
    return element;
}

function checkIfColorAdded(color) {
    let colorAdded = false;
    for (let i = 1; i < htmlElements.selectColor.length; i++) {
        if (htmlElements.selectColor[i].value === color) {
            colorAdded = true;
        }
    }
    return colorAdded;
}

function addColor(color) {
    let option = new Option(color, color);
    htmlElements.selectColor.appendChild(option);
    reset();
}

function chooseColor(color) {
    for (let i = 0; i < htmlElements.selectColor.length; i++) {
        if (htmlElements.selectColor[i].value === color) {
            return setSelectedIndex[i];
        }
    }
}

function setSelectedIndex(idx) {
    htmlElements.selectColor.selectedIndex = idx;
}

function setColor(color) {
    document.body.style.setProperty("--color", color);
}

function removeColor(color) {
    let colorAdded = checkIfColorAdded(color);
    if (colorAdded === true) {
        for (let i = 1; i < htmlElements.selectColor.length; i++) {
            if (htmlElements.selectColor[i].value === color) {
                htmlElements.selectColor.removeChild(htmlElements.selectColor[i]);
                htmlElements.selectColor.selectedIndex = 0;
            }
        }
    } else {
        alert("There's no such a color");
    }
}

function reset() {
    htmlElements.input.value === "";
    document.body.style.removeProperty('--color')
}

function checkIfColorCanBeAdded(color) {
    if (color.indexOf('rgb') > -1 || color === '') {
        return false;
    }

    let div = document.createElement('div');
    div.style.backgroundColor = color;
    let colorIsSetCorrectly = div.style.backgroundColor === color;
    return colorIsSetCorrectly;
}
