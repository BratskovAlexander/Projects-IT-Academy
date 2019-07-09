function delay(millisecond) {
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("millisecond")
    }, millisecond);
});
}


delay(3000).then(function(param) {
    console.log(param);
});