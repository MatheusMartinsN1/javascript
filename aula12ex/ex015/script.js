function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let txtano = window.document.getElementById('txtano')
    let masc = window.document.getElementById('masc')
    let fem = window.document.getElementById('fem')
    let res = window.document.getElementById('res')

    if(txtano.value == 0 || txtano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - txtano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'imagens/foto-bebe-m.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
                
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'imagens/foto-bebe-f.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}