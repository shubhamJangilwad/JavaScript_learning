function greet(){
    console.log("Hello World")
}

function execute(task){
    task()
}

execute(greet)



function add(a,b){
    console.log(100+30)
}

function test(addition){
    addition()
}

test(add)

let multipy = (a,b) =>{
    return a * b
}

console.log(multipy(5,7))

// passes the arrow function to print hello
function run(task) {

    task()

}

run(()=>{
    console.log("Hello")
})

// callback with parameter
function processUser(callback) {

    callback("Shubham")

}

processUser((name)=>{
    console.log(`Hello ${name}`)
})

// pass arrow function that print 30
function calculate(task) {

    task(10, 20)

}

calculate((a, b)=>{
    console.log(`addition is :${a + b}`) ;
})


// forEach print all fruits using arrow callback
let fruits = ["Apple", "Mango", "Banana"]

fruits.forEach((fruit)=>{
    console.log(fruit)
})

// Multipy Numbers
let numbers = [1,2,3,4]

numbers.forEach((number)=>{
    console.log(number*10)
})


// index + value
let colors = ["Red", "Blue", "Green"]

colors.forEach((color , index)=>{
    console.log(index,color)
})