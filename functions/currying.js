function precoComImposto(imposto) {
  return function(preco) {
    return preco * (1 + imposto)
  }
}

const precoComImpostoRj = precoComImposto(0.15)
const precoComImpostoSp = precoComImposto(0.90)

precoSp = precoComImpostoSp(10)
precoRj = precoComImpostoRj(20)