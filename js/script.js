// SCROLL ANIMATION 
AOS.init();

//NAVBAR 
document.querySelector("#menu").onclick = () => {
    document.querySelector(".list").classList.add("show")
}
document.querySelector("#hide-menu").onclick = () => {
    document.querySelector(".list").classList.remove("show")
}
