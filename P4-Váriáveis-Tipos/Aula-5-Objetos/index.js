// Declarando um objeto
let obj = {}

// Atribuindo valor
obj.name = 'Julia'
console.log(obj)
obj.age = 20
console.log(obj)

// Métodos // Object.MéTODO(Nome_do_Objeto)
console.log(Object.values(obj))
console.log(Object.keys(obj))

// Declarando um objeto2
let person = {
    name: 'Julia',
    age: 20,
    adress: 'Rua 2'
}

// Tipos de retornos
console.log(person)
console.log(person.name)
console.log(person['name'])

// Atribuição 2
person['numberOfSiblins'] = 3
console.log(person)

//Atribuição 3
let mom = 'nameOfMom'
// Key alterada passa a ser nameOfMom
person[mom] = 'Maria'
console.log(person)

// Key alterada passa a ser mom
person.mom = 'Marta'
console.log(person)