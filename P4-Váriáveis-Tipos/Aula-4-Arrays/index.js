// Formas de declarar
let array = []  //Mais comum
let array2 = new Array()

// Método push //Adiciona elementos no final do array
array.push(3, 2, 5)
console.log(array)

// Método pop // Remove o ultimo elemento 
array.pop()
console.log(array)

// Método shift // Remove o primeiro elemento
array.shift()
console.log(array)

//Método unshift // Adiciona elementos no inicio do array
array.unshift(1)
console.log(array)

// Em loops
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Método include //Verifica se um elemento existe no array
console.log(array.includes(2))

// Método every // Verifica se todos os itens são iguais a
console.log(array.every(item => item === 3))

// Método some // Verifica se algum item é igual a
console.log(array.some(item => item === 3))

// Método reverse // Imprime os elemntos na ordem contrária
console.log(array.reverse)
