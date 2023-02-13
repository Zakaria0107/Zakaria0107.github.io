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


window.onclick = () => {
    document.querySelectorAll(".list a").forEach(elt => {
        if(event.target == elt) {
            document.querySelector(".list").classList.remove("show")
        }
    })
}


// FORM
document.querySelector("#send").onclick = () => {
    event.preventDefault()

    let params = {
        name : document.querySelector("#fullName") , 
        email : document.querySelector("#email"), 
        subject : document.querySelector("#subject"),
        message : document.querySelector("#message")
    }
    
    params.name.value = ""
    params.email.value = ""
    params.subject.value = ""
    params.message.value = ""


}