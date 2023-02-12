// SCROLL ANIMATION 
AOS.init();

// swipe titles
const titles = document.querySelectorAll("#about_section .content h2")
setInterval(() => {
    titles[0].classList.toggle("hide")
    titles[1].classList.toggle("hide")
}, 4000);

//NAVBAR 
document.querySelector("#menu").onclick = () => {
    document.querySelector(".list").classList.add("show")
}
document.querySelector("#hide-menu").onclick = () => {
    document.querySelector(".list").classList.remove("show")
}
