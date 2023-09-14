function adicao() {
    let n1 = Number(window.prompt("digite o primeiro número:"))
    let n2 = Number(window.prompt("digite o segundo número:"))
   n3= n1+n2

   let res = document.getElementById('resultado')

   res.innerHTML = `<p> o resultado da soma é ${n3}.`

}
 