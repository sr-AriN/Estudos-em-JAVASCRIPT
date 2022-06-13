// Tipos primitivos

// Bollean
var VerdadeiroOuFalso = false;
console.log(typeof(VerdadeiroOuFalso));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = 'ariel';
console.log(typeof(nome));

// Function
var funcao = function(){}
console.log(typeof(funcao));

// Criada normalmente em escopo global
var variavel;
variavel = 'ariel';
console.log(variavel);

// Criada normalmente em escopo local
let variavel2;
variavel2 = 'ariel';
console.log(variavel2);

// Criada normalmente em escopo local de bloco
const constante = 'ariel'; //Deve ser declarada
// constante = 'Ariel'; // Não pode ser reatribuida
console.log(constante);





// Escopos

// Visto por todo o código
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    // Visto apenas na função
    let escopoLocalInterno = 'local';
}

console.log(escopoLocalInterno);




// Atribuição
var atribuição = 'ariel';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Identica
var coparacao2 = '0' === 0;
console.log(coparacao2);




// Adiçõa
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicaçõa
var mult = 2 * 3;
console.log(mult);

// Divisão real
var div = 6 / 2;
console.log(div);

// Divisão inteira
var divInteira = 5 % 2; // Vai pegar o resto da divisão
console.log(divInteira);

// Pontênciação
var potencia = 2 ** 10;
console.log(potencia);



// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 2;
console.log(menorQue);

// Maior igual que
var maiorIgual = 5 >= 2;
console.log(maiorIgual);

// Menor igual que
var menorIgual = 5 <= 2;
console.log(menorIgual);




// AND
var and = true && false;
console.log(and);

// OR
var or = true || false;
console.log(or);

// Não
var nao = !true;
console.log(nao);