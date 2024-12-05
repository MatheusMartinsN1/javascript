function carregar() {
    let msg = window.document.getElementById('msg')
    let imagem = window.document.getElementById('imagem')
    let boa = window.document.getElementById('boa')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        imagem.src = 'imagens/fotomanha.png'
        boa.innerHTML = 'Bom Dia!'
        document.body.style.backgroundColor = '#e2d1a8'
    }else if(hora >= 12 && hora <= 18) {
        imagem.src = 'imagens/fototarde.png'
        boa.innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = '#fab47d'
    }else {
        imagem.src = 'imagens/fotonoite.png'
        boa.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = '#033a5e'
    }
}
