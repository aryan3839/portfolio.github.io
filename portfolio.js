window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})
let nav = document.querySelector(".nav").querySelectorAll("a");
console.log(nav);
nav.forEach(element => {
    element.addEventListener("click", function() {
        nav.forEach(navbar => navbar.classList.remove("active"))
        this.classList.add("active");
    })
});