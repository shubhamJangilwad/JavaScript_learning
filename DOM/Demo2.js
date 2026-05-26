//  modern events 
// addEventListener

let button = document.getElementById("btn")

button.addEventListener("click", function(){
    let heading = document.getElementById("title")
    heading.style.color = "blue"
})


button.addEventListener("mouseover", function(){
    let heading = document.getElementById("title")
    heading.style.color = "red"
})


button.addEventListener("mouseout", ()=>{
    let heading = document.getElementById("title")
    heading.style.color = "black"

})

let input = document.getElementById("input")

input.addEventListener("keydown", ()=>{

    console.log("Key Pressed")

})


input.addEventListener("keyup", ()=>{

    console.log("Key Released")

})



input.addEventListener("input", ()=>{

    console.log(input.value)

})


input.addEventListener("change", ()=>{

    console.log("Value Changed")

})