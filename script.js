let menu = document.querySelector(".menu")
let ham = document.querySelector("#ham")
let mark = document.querySelector("#mark")

ham.addEventListener("click", ()=>{
    menu.classList.add('active')
})
mark.addEventListener("click", ()=>{
    menu.classList.remove('active')
})