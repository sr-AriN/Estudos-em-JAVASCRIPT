// Declarando a função // função declarativa
function funcao(){
    console.log('Tudo tranquilo por aqui')
}
// Chamando a função
funcao()

// Função com parametros
function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}

mensagem('Tudo tranquilo', 'por aqui')

// Expressão de função
// Com nomeação
var funcao2 = function funcao2(){
    console.log('Função com nomeação')
}
funcao2()

// Sem nomeação
var funcao3 = function(){
    console.log('Função sem nomeação')
}
funcao3()

// Arrow function
var funcao4 = () =>{
    console.log('Arrow Function')
}

// Auto invocada IIFE (Immediately Invoked Function Expression)
(
    function(){
        let name = 'Digital Innovation One'
        return name
    }
)()

// Com parâmetros
(
    function(a, b){
        return a + b
    }
)(1, 2)

// Atribuindo a uma variável
const soma3 = (
    function(){
        return a + b
    }
)(1, 2)
console.log(soma)

// Callbacks // funcção passada como argumento para outra
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1, num2){
    return operacao(num1 + num2)
}

const sub = function(num1, num2){
    return operacao(num1 - num2)
}

const resultSoma = calc(soma, 1, 2)
const resultSub = calc(sub, 1, 2)

console.log(resultSub)
console.log(resultSoma)

// Valores padrão
// Pré-ES2015
function exponecial(array, num){
    if(num === undefined){
        num = 1
    }
    const result =[]

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num)
    }
    return result
}

exponecial([1, 2, 3, 4])

// Pós-ES2015
function exponecial2(array, num = 1){  
    const result =[]

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num)
    }
    return result
}

exponecial([1, 2, 3, 4])

// Objeto arguments
function findMax(){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i]
        }
    }
    return max
}

console.log(findMax(1, 2, 3, 8, 90, 1)) //90


// This como usar e manipular
const pessoa = {
    firstName: 'André',
    lastName: 'Soares',
    id: 1,
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    },
    getId: function(){
        return this.id
    }
}

pessoa.fullName()
// 'André Soares'

pessoa.getId()
// 1

// Manipulando o valor
// Método call // apply
const pessoa1 = {
    nome: 'Miguel'
}

const animal = {
    nome: 'Murphy'
}

// sem rekação com as consts acima
function getSomething(){
    // this se referindo a funcção
    console.log(this.nome)
}

// informando pelo call qual const deve ser chamada
getSomething.call(pessoa1)
getSomething.call(animal)

// Outro exemplo apenas call
const myObj = {
    num1: 2,
    num2: 4
}

function soma2(a, b){
    console.log(this.num1 + this.num2 + a + b)
}
// myObj passa os vaores 2, 4
soma2.call(myObj, 1, 5)

// apenas com apply
const myObj2 = {
    num1: 2,
    num2: 4
}

function soma2(a, b){
    console.log(this.num1 + this.num2 + a + b)
}
// myObj passa os vaores 2, 4
soma2.apply(myObj2, [1, 5]) // valores passados dentro de um array


// Método Bind // Basicamente clona a função
const retornaNomes = function(){
    return this.nome
}

let bruno = retornaNomes.bind({
    nome: 'Bruno'
})

bruno()
// Bruno