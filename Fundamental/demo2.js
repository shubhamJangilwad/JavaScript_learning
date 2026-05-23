function sayHello(){
    console.log("Hello World")
}
sayHello()

const sayhello = () =>{
    console.log("Hello World")
}
sayhello()

// square of number
const square = (num) => num * num

console.log(square(12))

// multiplication of two numbers
const multiply = (a, b) => a * b
console.log(multiply(7,8))

// check num even or odd
const iseven = (num) =>{
    return num % 2 == 0 ? "Even" : "Odd"
}

console.log(iseven(77))

// check eligible or not if age > 18
const checkAge = (age) =>{
    return age >= 18 ? "eligible":"Not eligible"
}
console.log(checkAge(19))

// Largest number
const largest = (num1,num2) =>{
    return num1 > num2 ? num1 : num2
}

console.log(largest(34,98))

// calculator addition, substraction and multiplication
const Calculator = (a, b) =>{
    return (`Addition:${a + b},Substraction:${a - b},Multiplication:${a * b}`)
}

console.log(Calculator(12,5))


