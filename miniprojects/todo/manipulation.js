// to do list
// add add dynamic element 

// let userinput = document.querySelector("#input")

// let btn = document.querySelector("#btn")

// let ul = document.querySelector("#unorderd")

// btn.addEventListener("click",()=>{
//     let li = document.createElement("li")
//     li.textContent = userinput.value
//     ul.appendChild(li)
//     userinput.value = ""

// })








// add delete button
// let userinput = document.querySelector("#input")

// let btn = document.querySelector("#btn")

// let ul = document.querySelector("#unorderd")

// btn.addEventListener("click", ()=>{

//     let li = document.createElement("li")

//     li.textContent = userinput.value

//     let deleteBtn = document.createElement("button")

//     deleteBtn.textContent = "Delete"

//     li.appendChild(deleteBtn)

//     ul.appendChild(li)

//     userinput.value = ""

//     deleteBtn.addEventListener("click", ()=>{

//         li.remove()

//     })

// })



// add complete + delete button and styling using classList

let userinput = document.querySelector("#input")

let btn = document.querySelector("#btn")

let ul = document.querySelector("#unorderd")

btn.addEventListener("click", ()=>{

    let li = document.createElement("li")

    if (userinput.value === ""){
        return 
    }

    li.textContent = userinput.value

    let completebtn = document.createElement("button")

    let deletebtn = document.createElement("button")

    completebtn.textContent = "complete"
    deletebtn.textContent = "delete"

    li.appendChild(completebtn)
    li.appendChild(deletebtn)

    ul.appendChild(li)

    userinput.value = ""

    completebtn.addEventListener("click", ()=>{

        li.classList.toggle("style")

    })

    deletebtn.addEventListener("click", ()=>{

        li.remove()

    })



})