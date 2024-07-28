const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e) => {
  e.preventDefault()
  
  const horaBrasil = Number(frm.inHoraBrasil.value)

  let HoraFranca = horaBrasil + 5
  if (HoraFranca > 24) {
    HoraFranca - 24
  }

  resp.innerText = `Hora na França ${HoraFranca.toFixed(2)}Hr`
})