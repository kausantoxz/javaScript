function media(){
    let nome= window.prompt('qual é o nome do aluno?')
    let n1 = Number(window.prompt(`qual foi a primeira nota de  ${nome}?`))
    let n2 = Number(window.prompt (`além do ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1+n2)/2
    let msg
    if (med >=6){
            msg = ' meus parabens! voce passou !!!'
    } else {
            msg = ' estude um pouco mais!'
    }
    let res = document.getElementById('situacao')
    res.innerHTML =  `<p> calculando a média final de ${nome}.<p>`
    res.innerHTML += `<p> as notas obtidas foram ${n1} e ${n2}.`
    res.innerHTML +=  `<p> a media final será ${med}`
    res.innerHTML +=  `<p> a mensagem que temos é  : <br><br> <strong style='color:white;'>${msg}</strong>` 
}
   