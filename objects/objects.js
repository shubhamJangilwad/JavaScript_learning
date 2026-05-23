let product = {
    name : "Apple",
    price : 30,
    country : "India",
    city : "Nanded",
    state : "Maharashtra",
    new_product : {
        name : "Banana",
        price : 50
    },
    greet : function(){
        console.log("Hello")
    }
}

console.log(product)
product.name = "Mango"
product.price = 40
console.log(product)
product.new_product.name = "mataka"
console.log(product)
product.greet()


let numbers = [10, 20, 30, 40,50,60]
numbers.forEach((number,index) =>{
    console.log(index, number)
})

let products = ["car","cycle","table"]
products.forEach(product =>{
    console.log(`nice ${product}`)
})