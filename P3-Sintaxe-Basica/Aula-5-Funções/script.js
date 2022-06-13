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