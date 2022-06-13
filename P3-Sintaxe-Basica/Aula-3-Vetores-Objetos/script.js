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