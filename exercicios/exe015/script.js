function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[EERO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            genero = 'Homem'

            if (idade >= 00 && idade < 10){
                //criança
                img.setAttribute('src' , 'crianca-v.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src' , 'jovem-v.png')
           }else if (idade < 50){
               //adulto
               img.setAttribute('src' , 'adulto-v.png')
           }else {
               //idoso
               img.setAttribute('src' , 'idoso-h.png')
           }
                
        }else if(fsex[1].checked){
            genero = 'Mulher'

            if (idade >= 00 && idade < 10){
                //criança
                img.setAttribute('src' , 'crianca-b.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src' , 'jovem-b.png')
           }else if (idade < 50){
               //adulto
               img.setAttribute('src' , 'adulta-b.png')
           }else {
               //idoso
               img.setAttribute('src' , 'idosa-b.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
    
}