// Declarando String do tipo primitivo
let nome =  'João'
let sobrenome = 'Pedro'

// Concatenação de Strings
console.log(nome.concat(sobrenome))
console.log(nome + ' ' + sobrenome)
console.log(nome + '\n' + sobrenome)
console.log(nome + '\n\n' + sobrenome)
let concatenado = nome.concat(sobrenome)
console.log(concatenado.length)

// Cráses duplas
console.log(`${nome} ${sobrenome}`)
console.log(`${nome} 
${sobrenome}`)
console.log(`${nome} 
            
${sobrenome}`)

// ""
console.log('"')
console.log("\"")



// Declarando String como objeto
let exemplo = new String('blablabla')
// mostrando no console o tipo
console.log(typeof(exemplo))

// Iteração da string
console.log(nome[1])

// Método split
let frase = 'Olá, tudo bem?'
console.log(frase.split(''))
console.log(frase.split(' '))

// Método includes //Existe na frase tal coisa?
console.log(frase.includes('tudo'))

// StartsWith
console.log(frase.startsWith('O'))

// EndsWith
console.log(frase.endsWith('O'))

// Replace
// console.log(frase.replace(',', '!'))
// atribuido essa modificação sem mudar a frase
let stringModificada = frase.replace(',', '!')
console.log(frase)
console.log(stringModificada)
