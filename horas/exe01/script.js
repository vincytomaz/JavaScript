function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora > 00 && hora <= 12){
        //bom dia
        img.src = 'manha.png'
        foto.innerHTML = 'Bom dia!'
        document.body.style.background = '#99defe'
        document.body.style.font-style
    }else if (hora >12 && hora < 19 ){
        //boa tarde
        img.src = 'tarde.png'
        foto.innerHTML = 'Boa tarde!'
        document.body.style.background = '#f69a84'
       
    }else{
        //boa noite
        img.src = 'noite.png'
        foto.innerHTML = 'Boa noite!'
        document.body.style.background = '#00729f'
        
    }
}