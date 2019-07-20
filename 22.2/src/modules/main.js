function changeLink(link) {

    this.link = document.querySelector('a');
    link.preventDefault();
    link.addEventListener("click", () => {
        window.location.href = 'http://google.com';
    })
}
