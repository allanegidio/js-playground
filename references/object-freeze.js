// To prevent these unexpected changes
// You should use Object freeze.
const freeze = Object.freeze({ name: "Congelado" })
const reference = freeze

reference.name = "Nao muda"

console.log(freeze, reference)