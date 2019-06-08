function onButtonClick() {
    if (checkPassword() === true) {
        confirm('Спасибо, вы ввели верный пароль');
    };
};

function checkPassword() {
    let promtValue = prompt('Введите пароль');
    if (promtValue !== 'mypassword') {
    return checkPassword();
    }
    return true;
};