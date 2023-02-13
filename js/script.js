
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

    const name  = document.querySelector("#fullName") 
    const email = document.querySelector("#email")
    const subject =document.querySelector("#subject")
    const message = document.querySelector("#message")

    if(name.value == ""){
        Swal.fire("Empty Name")
        return
    }else if(email.vaue == ""){
        Swal.fire("Empty Email")
        return
    }else {
        emailjs.init('QRewmKub85EX_6kBl');
        emailjs.send("service_hshdeqy","template_5ast1wu",{
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        }).then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'I will text you soon',
                showConfirmButton: false,
                timer: 1500
              })
          }, (error) => {
              console.log(error.text);
          });
    }
    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""



}