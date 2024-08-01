const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(inNumero.value)

  const raiz = Math.sqrt(numero)
  if (Number.isInteger(raiz)) {
    resp.innerText = `Raiz é inteira, resultando: ${raiz}`

  } else {
    resp.innerText = `Raiz é quebrada, resultando: ${raiz}`
  }
})