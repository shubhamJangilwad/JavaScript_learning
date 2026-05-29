let input = document.getElementById("input")
let rollno = document.getElementById("rollno")
let email = document.getElementById("email")
let mobileno = document.getElementById("mobileno")

let subtn = document.getElementById("subtn")

let rightbox = document.getElementById("right-flexbox")
let leftbox = document.getElementById("left-flexbox")
leftbox.addEventListener("submit",(event)=>{
    event.preventDefault()
    rightbox.innerHTML = ""
    let para1 = document.createElement("p")
    let para2 = document.createElement("p")
    let para3 = document.createElement("p")
    let para4 = document.createElement("p")
    
    let deletebtn = document.createElement("button")

    let card = document.createElement("div")
    
    para1.textContent = `userName : ${input.value}`
    para2.textContent = `Roll_No : ${rollno.value}`
    para3.textContent = `Email : ${email.value}`
    para4.textContent = `Mobile_No : ${mobileno.value}`
    deletebtn.textContent = "delete"
    if(input.value === ""){
        return
    }
    if(rollno.value === ""){
        return
    }
    if(email.value === ""){
        return
    }
    if(mobileno.value === ""){
        return
    }
    
    
    card.appendChild(para1)
    card.appendChild(para2)
    card.appendChild(para3)
    card.appendChild(para4)
    card.appendChild(deletebtn)
    rightbox.appendChild(card)
    deletebtn.addEventListener("click",()=>{
    card.remove()
})
})




