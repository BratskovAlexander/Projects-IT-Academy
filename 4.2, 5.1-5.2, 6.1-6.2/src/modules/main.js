let htmlElements;

let itemsArray = [
    {
        color: 'white',
        bgColor: 'blue'
    },
    {
        color: 'black',
        bgColor: 'yellow',
        selected: true,

    },
    {
        color: 'green',
        bgColor: 'whitesmoke',
    }
];

function init() {
    htmlElements = {
        bgColorInput: document.querySelector('input.bg-color-input'),
        textColorInput: document.querySelector('input.text-color-input'),
        addButton: document.querySelector('button.add-button'),
        items: document.querySelector('div.items'),
        divHelloWord: document.querySelector(".hello-world"),
    };

    // Создаем обработчик на кнопку аdd
    htmlElements.addButton.addEventListener("click", addValueToArray);

    //  event это наш  blur, a event.target это значение bgColorInput(textColorInput)
    htmlElements.bgColorInput.addEventListener("blur", function (event) { validationInput(event.target) });
    htmlElements.textColorInput.addEventListener("blur", function (event) { validationInput(event.target) });
    render();
}

init();

// Функция прорисовки массива
function render() {

    // обнулили все, что внутри items
    htmlElements.items.innerHTML = "";
    // создаем новый массив
    for (i = 0; i < itemsArray.length; i++) {

        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.style.backgroundColor = itemsArray[i].bgColor;
        newDiv.addEventListener("click", newClick);


        let newSpan = document.createElement("span");
        newSpan.classList.add("item-text");
        newSpan.innerText = itemsArray[i].color;
        newSpan.style.color = itemsArray[i].color;


        let newButton = document.createElement("button");
        newButton.className = "delete-button";
        newButton.addEventListener("click", deleteButtonClick);
        newButton.innerText = "X";

        htmlElements.items.appendChild(newDiv);
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButton);

        if (itemsArray[i].selected) {
            newDiv.classList.add("selected");
            document.body.style.backgroundColor = itemsArray[i].bgColor;
            htmlElements.divHelloWord.style.color = itemsArray[i].color;
        }
    };
};



// функция для выделения элемента из списка
function newClick() {
    // цикл по перебору массива
    for (i = 0; i < itemsArray.length; i++) {
        // добавляет каждому элементу массиву новое свойство selected со значение false
        itemsArray[i].selected = false;
    }

    // присвоили переменной item ссылку на HTML элемент, на который мы нажали
    // this нам вернет тот элемент, на который мы нажали
    let newItem = this.parentElement;

    // создаем массив из тех элементов что нам нужны, это div.item 
    // то есть мы каждому div.item присвоили индекс из массива 
    let newItemArray = Array.from(newItem.querySelectorAll("div.item"));

    // Ищем индекс div.item на который нажали
    // this это и есть тот элемент на который мы нажимаем
    let newIndex = newItemArray.indexOf(this);

    // Теперь мы присваиваем выбранному элементу свойство selected со значением true
    itemsArray[newIndex].selected = true;

    // Теперь, нам надо получить те свойства bgColor, color, которые были у этого diva
    //  а так же сделать div классом selected(выбранным)
    if (itemsArray[newIndex].selected === true) {
        document.body.style.backgroundColor = itemsArray[newIndex].bgColor;
        document.querySelector(".hello-world").style.color = itemsArray[newIndex].color;
        document.querySelector("div.item").classList.add(".selected");
    }
    render();
};


// Функция удаления элемента по нажатию на Х
function deleteButtonClick(event) {

    // Останавливаем всплытие
    event.stopPropagation();

    // присвоили переменной item путь куда мы кликнули
    // this нам вернет родителя элемента(div.item ), на который мы нажали(кнопку button-delete)
    let item = this.parentElement;

    // вызываем родителя item то есть div.items
    let itemElements = item.parentElement;

    // создаем массив из тех элементов что нам нужны, это div.item 
    // то есть мы каждому div.item присвоили индекс из массива 
    let itemArray = Array.from(itemElements.querySelectorAll("div.item"));

    // Ищем индекс div.item на который нажали
    let index = itemArray.indexOf(item);

    // удаляем из массива 1 элемент с тем индексом, на который мы нажали!
    itemsArray.splice(index, 1);

    render();

};


// Функция для добавления новых элементов массива
function addValueToArray() {

    validationAddButton();
    // получаем значение input
    const inputValueBgC = htmlElements.bgColorInput.value;
    const inputValueColor = htmlElements.textColorInput.value;

    // if (inputValueBgC === "" || inputValueColor === "") {
    //   validationAddButton();
    // }

    // Проверяем это правильно введенный цвет или нет
    let checkBgc = checkIfColorCanBeAdded(inputValueBgC);
    let checkColor = checkIfColorCanBeAdded(inputValueColor);

    // Если цвет ввели правильно и тот и тот
    if (checkBgc === true && checkColor === true) {
        // и если наша функция по проверке цветов в массиве вернет нам  false(это значит нет такого сочетания цвета в массиве)
        if (checkIfColorAdded(inputValueBgC, inputValueColor) === false) {

            //создаем объект и Добавляем этот объект (значение с инпута) в наш массив
            const object = {
                bgColor: inputValueBgC,
                color: inputValueColor
            }
            itemsArray.push(object);
            htmlElements.bgColorInput.value = "";
            htmlElements.textColorInput.value = "";
        }
    }
    render();
};


// Функция проверки того, ввели мы правильное название цвета или нет
function checkIfColorCanBeAdded(color) {
    if (color.indexOf('rgb') > -1 || color === '') {
        return false;
    }
    let div = document.createElement('div');
    div.style.backgroundColor = color;
    let colorIsSetCorrectly = div.style.backgroundColor === color;
    return colorIsSetCorrectly;
};

// Функция проверки правильности введения в инпут значений если мы ввели всё кроме названия цвета, то будет красная рамка
function validationInput(input) {
    // удалили класс error если введено правильно
    input.classList.remove("error");

    // если ввели не цвет (!) то ошибка
    if (!checkIfColorCanBeAdded(input.value)) {
        input.classList.add("error");
        return false;
    }
    return true;
};


function validationAddButton() {

    let inputBgColAdd = htmlElements.bgColorInput.value;
    let inputColAdd = htmlElements.textColorInput.value;


    if (inputBgColAdd === "" || inputColAdd === "") {
        htmlElements.bgColorInput.classList.add("error");
        htmlElements.textColorInput.classList.add("error");
        return true;
    }
    return false;
};

// Функция для проверки наличия цветов в массиве
function checkIfColorAdded(bgrColor, txColor) {
    let check = false;
    // перебираем массив
    for (let i = 0; i < itemsArray.length; i++) {
        let colorAdded = itemsArray[i];

        // Проверяем наличие цвета введенного в инпут(и соответственно в наш входной параметр) 
        // если такие цвета есть в массиве, то выводим true
        if (colorAdded.color === txColor && colorAdded.bgColor === bgrColor) {
            check = true;

            // создали красную рамку, если такой цвет есть в массиве
            htmlElements.bgColorInput.classList.add("error");
            htmlElements.textColorInput.classList.add("error");
        }
    }
    // если нет цветов в массиве то функция вернет false так как check равен false изначально
    // если цвета есть то будет true
    return check;
}





