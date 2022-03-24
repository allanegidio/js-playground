// To prevent these unexpected changes
// You should use Object freeze.
// To change object in this case you should create a copy using spread operator.
const freeze = Object.freeze({ name: "Congelado" })
const copy = { ...freeze }

copy.name = "Agora mudou"

console.log(freeze, copy)