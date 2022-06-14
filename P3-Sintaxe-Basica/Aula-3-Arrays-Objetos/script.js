// Como declarar um array
let array = ['string', 1, true];
console.log(array);

// Podem conter vários tipos de dados (Incluindo outros arrays)
let arrayMestre = ['string', 1, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(arrayMestre[3]);

// forEach //Para cada item no array ele faz algo
arrayMestre.forEach(function(item, index){console.log(item, index)});

// push // Adiciona qualquer tipo de dado
arrayMestre.push('novo item');
console.log(arrayMestre);

// pop //Remove um item no final do array
arrayMestre.pop();
console.log(arrayMestre);

// shift // Remove um item no inicio do array
arrayMestre.shift();
console.log(arrayMestre);

// unshift // adiciona um item no inicio
arrayMestre.unshift('novo item no inicio');
console.log(arrayMestre);

// indexOf // Retorna o índice do dado 
console.log(arrayMestre.indexOf('1'))

// splice // Remove ou substitui um item pelo índice
arrayMestre.splice(0, 3);
console.log(arrayMestre);

// slice // Retorna uma parte de um array existente
let novoArray = arrayMestre.slice(0, 3);
console.log(arrayMestre);





// Objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object);
// console.log(object.algumacoisa)

// Desestruturação

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

// Outra forma
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

// Outro exemplo
const user = {
    id: 42,
    displayName: 'Johel',
    fullName: {
        firstName: 'Johel',
        LastName: 'Doe'
    }
}

//Faz a requisição do elemento 'id'
function userId({id}){
    return id
}

// Faz a requisição dos elementos especificos dentro de fullName e lhes atribui um apelido
function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

userId(user)
//42

getFullName(user)
//Johel Doe





// Spread
function sum(x, y, z){
    return x + y + z
}
const numbers = [1, 2, 3]
// console.log(sum(numbers)) // x recebe o array com os 3 elementos
console.log(sum(...numbers)) // os elementos são atribuidos a cada parâmetro


// Rest
function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho()// 0
confereTamanho(1, 2)// 2
confereTamanho(3, 4, 5)// 3