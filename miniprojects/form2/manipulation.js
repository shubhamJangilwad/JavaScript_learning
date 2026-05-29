let heading = document.querySelector("h1")
let para = document.querySelector("p")

let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")

let button = document.querySelector("#btn")

box1.addEventListener("click",()=>{
    
    box2.innerHTML = ""
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    h1.textContent = heading.textContent
    let p = document.createElement("p")
    p.textContent = para.textContent
    div.appendChild(h1)
    div.appendChild(p)
    box2.appendChild(div)
})

console.log("Start")

setTimeout(() => {

    console.log("Hello")

}, 10000)

console.log("End")


let count = 1

let timer = setInterval(() => {

    console.log("Hello")
    count++;

}, 1000)

console.log(count)

setTimeout(() => {

    clearInterval(timer)

}, 5000)