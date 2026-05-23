// check if any number is even
let numbers = [1,3,5,6]

let result = numbers.every(number=>{
    return number % 2 === 0;
})

console.log(result)

// check if any number is greater than 25
let nums = [45,28,30]

let result1 = nums.every(num=>{
    return num > 25;
})

console.log(result1)

// check if any word length is greater than 5
let words = ["HTML","CSS","Python"]

let result2 = words.every(word=>{
    return word.length > 2;
})

console.log(result2)

