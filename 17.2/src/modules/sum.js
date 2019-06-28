function sum(value) {
    let result = 0;

    function sum2(slogan) {
        result += slogan;
        return sum2;
    }

    sum2.showResult = function () {
        console.log(result);
    }

    sum2(value)
    return sum2;
}

sum(1)(2)(3)(4)(5).showResult();