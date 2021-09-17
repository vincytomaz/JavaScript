function tabuada() {

    var ent = document.querySelector('input#txte')
    var tab = document.getElementById('seltab')

    if (ent.value.length == 0) {
        window.alert('[ERRO]Digite um número!')    
    } else {
        let n = Number(ent.value)
        tab.innerHTML = ''
        
       for (c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) 
       }   
       }
    }