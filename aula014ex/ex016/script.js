function contar() {
    let star = document.getElementById('txts')
    let end = document.getElementById('txte')
    let step = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (star.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('Faltam dados seu animal!!')
        res.innerHTML = 'Impossivel contar sua anta'
    } else {
        res.innerHTML = 'Contando:'
        let s = Number(star.value)
        let e = Number(end.value)
        let p = Number(step.value)
        if (p <= 0) {
            alert('Passo inválido! Considere passo 1')
            p = 1
        }
        if (s < e) {
            //Contagem crescente
            for (let c = s; c <= e; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            //Contagem regressiva
            for(let c = s; c >= e; c -= p)
                res.innerHTML += `${c}\u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}