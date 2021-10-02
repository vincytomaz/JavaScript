function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML=(`Agora são ${hora}horas do dia`)

    if(hora >= 00 && hora <= 12){
        img.src ='manha.png'
       //BOM DIA
    }else if(hora > 12 && hora < 19){
        img.src = 'tarde.png'
        //BOA TARDE
    }else{
        img.src = 'noite.png'
        //BOA NOITE    
    }
    
}
