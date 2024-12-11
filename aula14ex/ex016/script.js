function contar() {
    let inicio = window.document.getElementById('txt1')
    let fim = window.document.getElementById('txt2')
    let passo = window.document.getElementById('txt3')
    let res = window.document.getElementById('res')
    if (inicio.value == 0 || fim.value == 0 || passo. value == 0){
        window.alert('Por favor, complete todos os campos abaixo!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) { 
        for (let c = i ; c <= f ; c += p) {
            res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
                res.innerHTML += `\u{1F3C1}`
    }
}