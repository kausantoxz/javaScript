function carregar(){
         var msg = window.document.getElementById('msg') 
         var img = window.document.getElementById('imagem')
         var data = new Date()
         var hora = data.getHours()
         var minuto = data.getMinutes()
          msg.innerHTML = `Agora são ${hora}:${minuto} horas.`


         if (hora >=4 && hora < 12){
          //Bom dia!
          img.src = 'imagens/manha.png'
          document.body.style.background = '#D9C24E'
         }
         else if (hora >=12 && hora <=18){
          //Boa tarde!
          img.src = 'imagens/tarde.jpg'
          document.body.style.background = '#4A96D9'
         }
        
         else if (hora >=18 && hora < 22){
          //Boa noite!
          img.src = 'imagens/noite.jpg'
          document.body.style.background = '#031226'
         }
         else {
         
            //madrugada!
            img.src = 'imagens/madrugada.png'
            document.body.style.background = '#454259'
         }
}