let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora < 12) {
    console.log(`Agora são ${hora} horas da manhã`)
}else if(hora >= 12 && hora < 19) {
    console.log(`Agora são ${hora} horas da tarde`)
}else if(hora >= 19 && hora < 23) {
    console.log(`Agora são ${hora} horas da noite`)
}else if(hora >= 0 && hora < 6) {
    console.log(`Agora são ${hora} horas da madrugada`)
}