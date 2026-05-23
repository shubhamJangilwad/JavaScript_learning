// copy array
let numbers = [1,2,3]

let copy = [...numbers]

console.log(copy)

// add values using spread operator

let nums = [10,20]

let result = [...nums,30,40]

console.log(nums)
console.log(result)
console.log(nums)


// merge array
let arr1 = [1,2]
let arr2 = [3,4]

let merge = [...arr1,...arr2]
console.log(merge)

// copy object
let user = {

    name: "Shubham",
    age: 22

}

let copyUser = {...user}
console.log(copyUser)

// add new property
let employee = {

    name: "Rahul",
    age : 30

}

let newEmployee = {
    ...employee,
    age : 25
}

console.log(newEmployee)

// merge objects
let obj1 = {

    a: 1

}

let obj2 = {

    b: 2

}

let mergeObjects = {
    ...obj1,...obj2
}

console.log(mergeObjects)