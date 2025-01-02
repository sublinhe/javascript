var agora = new Date
var hora = agora.getHours(  )
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12) {
    console.log('Está de manhã.')
} else if (hora >= 12 && hora < 19) {
    console.log('Está de tarde.')
} else {
    console.log('Está a noite.')
}