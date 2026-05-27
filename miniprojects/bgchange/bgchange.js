// background color change
let backgroundChange = document.querySelector("body")

let change_bg = document.querySelector("#change")

change_bg.addEventListener("click",()=>{
    backgroundChange.classList.toggle("bgchange")
})


// show/hide password

let password = document.querySelector("#password")

let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type = "text"
        console.log(password.value)
    }else{
        password.type = "password"
    }
})


// to do app

