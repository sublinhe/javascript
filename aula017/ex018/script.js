let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
 if (Number(n) >= 1 && Number(n) <= 250) {
    return true
 } else {
    return false
 }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado com sucesso!`
        list.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor invalido ou você ja adicionou anteriormente, burrao.')
    }
    num.value = ''
    num.focus()
} 



function finalizar() {
    if (valores.length == 0) {
        alert('Adicione um valor antes de finalizar sua anta!')
    } else {
        let tot = valores.length
        let big = valores[0]
        let down = valores[0]
        let tame = 0
        let media = 0
        for (let pos in valores) {
            tame += valores[pos]
            if (valores[pos] > big) {
                big = valores[pos]
            } if(valores[pos] < down) {
                down = valores[pos]
            }
        }
        media = tame / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${big}</p>`
        res.innerHTML += `<p> O menor valor encontrado foi ${down}`
        res.innerHTML +=`<p>A soma dos valores é ${tame}`
        res.innerHTML += `<p> A média dos valores digitados é ${media}`
    }
}

