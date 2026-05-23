// Multiply by 2
let numbers = [1,2,3,4]

let multiply = numbers.map((number)=>number * 2)//2,4,6,8
console.log(multiply)

// add 5
let elements = [10,20,30]

let add = elements.map((element)=>element + 5)
console.log(add)


// convert to uppercase
let names = ["rahul","aman","shubham"]

let upper = names.map(name =>{
    return name.toUpperCase()
})
console.log(upper)

// convert numbers to strings
let nums = [1,2,3]

let result = nums.map(num=>{
    return String(num)
})

console.log(result)