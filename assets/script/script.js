let buton = document.querySelector(".fa-bars")
let close = document.querySelector(".close")
let aside = document.querySelector(".aside")

buton.addEventListener("click",function () {
    aside.classList.remove("none")
})
close.addEventListener("click",function () {
    aside.classList.add("none")
})

let shop_icon = document.querySelector(".fa-bag-shopping")
let shop_icon_close = document.querySelector(".fa-xmark")
let shop_icon_aside = document.querySelector(".shop_aside")

shop_icon.addEventListener("click",function () {
    shop_icon_aside.classList.remove("active")
})
shop_icon_close.addEventListener("click",function () {
    shop_icon_aside.classList.add("active")
})