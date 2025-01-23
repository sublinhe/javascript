let friend = {nome: 'Pedro', sexo:'M', peso:'100.9', engordar(p=0){
    console.log('Engordouuuu!!!!!!')
    this.peso += p
}}
friend.engordar(2)
console.log(`${friend.nome} pesa ${friend.peso}Kg` )