// Using const you store your value in memory
// But you can still change the property into object
const object = { name: "Allan", age: 28 }
const reference = object

reference.name = "Egidio"

console.log(object, reference)