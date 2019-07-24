function delay(ms) {
    return Promise.resolve().then(() => {
        return new Promise((resolve) => {
            setTimeout(function() {
                resolve("millisecond")
            }, ms);
        })
    });
}

function delay2(ms2) {
    return Promise.resolve().then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve.bind(null, 123), ms2);
        })
    });
}




delay(3000).then((param) => {
    console.log(param);
});


delay2(6000).then((param2) => {
    console.log(param2);
});