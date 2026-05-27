let userinput = document.querySelector("#input")

let counter = document.querySelector("#counter")

let btn = document.querySelector("#btn")

let count = 0

btn.addEventListener("click",()=>{
    // counter.textContent = `${userinput.value.length} characters`
    for(let element of userinput.value){
        if(element != " ")
            count += 1
    }
    counter.textContent = `${count} characters`
    userinput.value = ""
    count = 0

})



let color = document.querySelector("body")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")


red.addEventListener("click",()=>{
    color.classList.toggle("red")
})

green.addEventListener("click",()=>{
    color.classList.toggle("green")
})

blue.addEventListener("click",()=>{
    color.classList.toggle("blue")
})








