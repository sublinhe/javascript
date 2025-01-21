let num = [5, 8, 3, 6 , 9]
num.push(1)
num.sort() 
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('Deixa de ser um animal, esse número não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}
