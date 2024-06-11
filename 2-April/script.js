$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

    var img = document.querySelector(".image");
    var button = document.querySelector(".submit");
    var main = document.querySelector(".main")

    button.addEventListener("click", function(){
        img.style.right = "-40%";
    })