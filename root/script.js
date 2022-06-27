function retrc() {
  let btn = document.querySelector("#sign")
  fetch("https://vrsignserver.qaiik.repl.co/count").then(x=>x.text()).then(xx=>{
    btn.innerText = `sign: ${xx}`
  })
}

retrc()

function sign() {
  if (!localStorage.alr) {
    fetch("https://vrsignserver.qaiik.repl.co/sign")
    localStorage.alr = "xyz"
  }
  location.reload()
}
