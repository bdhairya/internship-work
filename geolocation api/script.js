// let hum = document.querySelector(".humburger")
// let nav = document.querySelector(".nav-2")
// let huml1 = document.querySelector("#humline1")
// let huml2 = document.querySelector("#humline2")
// let huml3 = document.querySelector("#humline3")
// let show = 0;
// let flat = 0

// hum.addEventListener("click", function () {
//     if (show == 0) {
//         nav.style.width = "300px",
//             show = 1
//     } else {
//         nav.style.width = "0px",
//             show = 0
//     }
// })
// hum.addEventListener("click", function () {
//     if (flat == 0) {
//         huml1.style.transform = "rotate(45deg) translate(10px , 3px)",
//         huml2.style.opacity = "0",
//         huml3.style.transform = "rotate(-45deg) translate(7px , -3px)",
//             flat = 1

//     } else {
//         huml1.style.transform = "inherit",
//         huml2.style.opacity = "1",
//         huml3.style.transform = "inherit",
       
//             flat = 0
//     }
// })

var hamburger = document.querySelector(".hamburger")
var nav2 = document.querySelector(".nav-2")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var line3 = document.querySelector("#line3")
var body = document.querySelector("body")
var show = 0;
var flat = 0;

hamburger.addEventListener("click",function(){
    if (show == 0) {
        nav2.style.width = "225px",
        body.style.overflow = "hidden",
        show = 1
    } else {
        nav2.style.width = "0px",
        body.style.overflow = "auto",
        show = 0
    }
})
hamburger.addEventListener("click",function(){
    if(flat == 0){
        line1.style.transform = "rotate(45deg) translate(33%, 386%)",
        line2.style.opacity = "0",
        line3.style.transform = "rotate(-45deg) translate(9%, -140%)",
        flat = 1
    }else {
        line1.style.transform = "inherit",
        line2.style.opacity = "1",
        line3.style.transform = "inherit",
        flat = 0
    }
})





