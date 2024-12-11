function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10 ; c++) {
            let item = window.document.createElement('option')
            tab.appendChild(item)
            item.text = `${c} X ${n} = ${c*n}`
        }
    }
}