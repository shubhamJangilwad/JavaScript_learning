// get all keys use object.keys built in method
let user = {

    name: "Shubham",
    age: 22,
    city: "Pune"

}

let keys = Object.keys(user)
let values = Object.values(user)
let entries = Object.entries(user)

console.log(keys)
console.log(values)
console.log(entries)


Object.keys(user).forEach((key)=>{
    console.log(key)
})


Object.values(user).forEach((value)=>{
    console.log(value)
})


Object.entries(user).forEach((entry)=>{
    console.log(entry)
})



// print users cities
let students = [

    {
        name: "Rahul",
        address: {
            city: "Pune"
        }
    },

    {
        name: "Aman",
        address: {
            city: "Mumbai"
        }
    }

]

let cities = students.map((student)=>{
    return student.address.city
})

console.log(cities)



// get only product name
let products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000
    },

    {
        id: 2,
        name: "Mobile",
        price: 20000
    }

]

let p_names = products.map((product)=>{
    return product.name
})

console.log(p_names)


// Get products price> 10000
let products1 = [

    {
        name: "Laptop",
        price: 50000
    },

    {
        name: "Mouse",
        price: 500
    },

    {
        name: "Mobile",
        price: 20000
    }

]

let p_price = products1.filter((product1)=>{
    return product1.price > 10000
})

console.log(p_price)


// find user

let users1 = [

    {
        id: 101,
        name: "Rahul"
    },

    {
        id: 102,
        name: "Aman"
    }

]

let get_user = users1.find((user1)=>{
    return user1.id = 102;
})

console.log(get_user)

// total cart price
let cart = [

    {
        product: "Laptop",
        price: 50000
    },

    {
        product: "Mouse",
        price: 1000
    },

    {
        product: "Keyboard",
        price: 2000
    }

]

let total_price = cart.reduce((total,c)=>{
    return total += c.price
},0)

console.log(total_price)


// Add gst to price
let products2 = [

    {
        name: "Laptop",
        price: 50000
    },

    {
        name: "Mobile",
        price: 20000
    }

]

let transformed = products2.map((price2)=>{
    return {
        name : price2.name,
        price : price2.price + (price2.price * 18 / 100)
    }
})

console.log(transformed)

// print the all course
let boys = [

    {
        name: "Rahul",
        courses: ["Java","Python"]
    },

    {
        name: "Aman",
        courses: ["JavaScript","React"]
    }

]

boys.forEach((boy)=>{
    boy.courses.forEach((course)=>{
        console.log(course)
    })
})

// print the product names
let products3 = [

    { name: "Laptop", price: 50000 },

    { name: "Mobile", price: 20000 },

    { name: "Mouse", price: 500 }

]

products3.forEach((product3)=>{
    console.log(product3.name)
})

// Create a price array

let priceArray = products3.map((product3)=>{
    return product3.price
})

console.log(priceArray)

// get expensive products

let e_product = products3.filter((product3)=>{
    return product3.price > 10000;
})

console.log(e_product)


// find product whose name = Mobile

let find_mobile = products3.find((product3)=>{
    return product3.name === "Mobile";
})

console.log(find_mobile)




















