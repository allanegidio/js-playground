// ====================================================
// Primitive values like number, bool, bigint, and etc.
// Does not share reference

let number = 3
let reference = number

number ++
reference --

console.log(number, reference)