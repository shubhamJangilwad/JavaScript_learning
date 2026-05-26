// 1.classList - control css classes using javascript
// classListadd()
let colorh1 = document.querySelector("#title")

let clickbtn1 = document.querySelector("#btn1")


clickbtn1.addEventListener("click",()=>{
    colorh1.classList.add("color")
})

// classListremove()
let clickbtn2 = document.querySelector("#btn2")
clickbtn2.addEventListener("click",()=>{
    colorh1.classList.remove("color")
})

// classListtoggle - one button can add and remove css class (one click add and another click remove)
let clickbtn3 = document.querySelector("#btn3")
clickbtn3.addEventListener("click",()=>{
    colorh1.classList.toggle("color")
})

// 2.attributes - Extra information inside HTML tags
// getAttribute()

let placeholderatt = document.querySelector("input")

console.log(placeholderatt.getAttribute("placeholder"))

// setAttribute - is used to create or change attribute values dynamically

let setplaceholder = document.querySelector("input")
setplaceholder.setAttribute("placeholder","userName")
console.log(setplaceholder.getAttribute("placeholder"))

// 3.Traversing DOM - moving between related HTML elements
// Dom elements are connected like family tree

// parentElement
let getparentEle = document.querySelector("h1")

console.log(getparentEle.parentElement)

// children
let getchildEle = document.querySelector("body")

console.log(getchildEle.children)

// nextElementSibling

let nextelesibling = document.querySelector("h1")

console.log(nextelesibling.nextElementSibling)

// previousElementSibling

let previouselelesibling = document.querySelector("#btn1")

console.log(previouselelesibling.previousElementSibling)

// 4.Creating HTML Elements Dynamically

let heading = document.createElement("h1")

heading.innerText = "this is Dynamically created heading"

document.body.appendChild(heading)


// 5.Remove Elements

// remove() - remove elements itself(disappear on webpage)

let removeh4 = document.getElementById("h4")

removeh4.remove()

// removeChild

let box = document.getElementById("box")

let para = document.getElementById("para")

box.removeChild(para)