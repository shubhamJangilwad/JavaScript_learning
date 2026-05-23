// odd numbers
let numbers = [1,2,3,4,5,6]

let result = numbers.filter(number=>{
    return number % 2 == 0;
})

console.log(result)

// numbers greater than 20
let nums = [10,25,5,40]
let result1 = nums.filter(num=>{
    return num > 20;
})

console.log(result1) 

// words length greater than 4

let words = ["HTML","CSS","JavaScript","Python"]

let result2 = words.filter(word=>{
    return word.length>4;
})

console.log(result2)

// get only true values
let values = [true,false,true,false]

let result3 = values.filter(value=>{
    return value === true;
})

console.log(result3)


// remove empty strings
let users = [
    "Rahul",
    "",
    "Aman",
    ""
]

let result4 = users.filter(user=>{
    return user !== "";
})
console.log(result4)