// find first even number
let numbers = [5,8,10,3]

let result = numbers.find(number=>{
    return number % 2 === 0;
})

console.log(result)

// first word with length > 5
let words = ["HTML","CSS","Python","JavaScript"]

let result1 = words.find(word=>{
    return word.length > 5;
})

console.log(result1)

// first number > 10

let nums = [1,3,7,9,12]
let result2 = nums.find(num=>{
    return num > 10;
})

console.log(result2)

// find Aman 
let names = ["Rahul","Aman","Shubham"]
let result3 = names.find(name=>{
    return name === "Aman";
})

console.log(result3)

// first true
let b_values = [false,false,true,false]
let result4 = b_values.find(value=>{
    return value === true;
})

console.log(result4)