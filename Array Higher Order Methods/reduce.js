// total sum
let numbers = [1,2,3,4]

let result = numbers.reduce((total , number)=>{
    return total + number
},0)

console.log(result)

// total price
let prices = [100,200,300]

let result1 = prices.reduce((total , price)=>{
    return total + price
},0)

console.log(result1)

// Multiply all numbers

let nums = [2,3,4]

let result2 = nums.reduce((total , num)=>{
    return total * num
},1)

console.log(result2)

// find the largest number
let elements = [10,25,5,40,15,34,56]

let result3 = elements.reduce((largest , element)=>{
    return element > largest ? element : largest; 
})

console.log(result3)

// print indexes and total sum
let numbers1 = [10,20,30]

let result4 = numbers1.reduce((total,number,index)=>{
    console.log(`Index ${index}:${number}`)
    return total += number
},0)

console.log(result4)






let hanumant = [1,2,3,4,5,6,7]

let shubham = hanumant.reduce((total,element,index,array)=>{
    console.log(array)
    console.log(`index:${index}:${element}`)
    return total += element;
},0)














