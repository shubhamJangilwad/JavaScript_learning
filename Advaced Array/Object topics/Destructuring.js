let numbers = [5,10,15]

let [a,b,c] = numbers

console.log(a,b,c)

// extract red and green
let colors = ["Red","Blue","Green"]

let [first,,last] = colors
console.log(first,last)


// extract name and age
let student = {

    name: "Aman",
    age: 22

}

let {name,age} = student

console.log(name,age)


// renaming the variable
let user = {

    name: "Rahul"

}

let {name : userName} = user

console.log(userName)


// give default value 
let [d,e=100] = [10]

console.log(d,e)



