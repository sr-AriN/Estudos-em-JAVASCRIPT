// ESTRUTURAS CONDICIONAIS
var jogador1 = 1;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos!')

// If else padrão
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}else{
    console.log('Ninguém marcou ponto!');
}

// Switch

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguem ganhou!');
        break;
}

// ESTRUTURAS DE REPETIÇÃO
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// for in com array // imprime cada indice 
for(let i in array){
    console.log(i);
}

// for in com object // imprime cada indice
for(i in object){
    console.log(i); //imprime a propriedade 1 e etc
    console.log(object[i]) // imprime o valor1 da propriedade 1 e etc
}

// for of em array // Imprime o conteúdo de cada indice
for(i of array){
    console.log(i);
}

// for of com objetos // Precisa passar a propriedade desejada // imprime cada letra em uma linha
for(i of object.propriedade1){
    console.log(i);
}

// while
var a = 0;
while(a < 10){
    a++;
    console.log(a);
}

// do while
do{
    a++;
    console.log(a);
}while(a < 10);