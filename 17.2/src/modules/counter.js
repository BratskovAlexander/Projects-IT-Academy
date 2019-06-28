function getCounterObject() {
    let counter = 0;

    function increase(slogan) {
        counter += slogan;
    }
    function decrease(slogan) {
        counter -= slogan;
    }
    function show() {
        console.log(`counter ${counter}`);
    }

    const obj = { increase, decrease, show }

    return obj;
}

const objCounter = getCounterObject();

objCounter.increase(321);
objCounter.decrease(123);
objCounter.show();