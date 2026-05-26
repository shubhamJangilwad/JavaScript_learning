// Methods for selecting elements
// getElementById - apply style using id
let heading = document.getElementById("title")
heading.style.color = "red";

// getElementByClassName - apply style on groups of elements using Class selector
let paragraph = document.getElementsByClassName("bgcolor")

for(let i = 0;i<paragraph.length;i++){
    paragraph[i].style.backgroundColor = "yellow"
}

// querySelector() - apply styling on first matching element
let elements = document.querySelector(".bgcolor")
elements.style.display = "inline"

// quetySelectorAll() - applying style all matching elements
let fontsize = document.querySelectorAll(".bgcolor")

fontsize.forEach(phara =>{
    phara.style.fontSize = "10px"
    phara.style.display = "inline-block"
})

// Changing Content
// inner text
let changetext = document.getElementById("change")
changetext.innerText = "this is Shantanu"

// innerHtml
let chnagehtml = document.getElementById("change")
chnagehtml.innerHTML = "<h3>this is shantanu</h3>"

// textContent
let textcontent = document.getElementById("change")
textcontent.textContent = "<h3>this is shantanu</h3>"

function showMessage(){
    let othertext = document.getElementById("change")
    othertext.innerText = "this is rajjat"
}