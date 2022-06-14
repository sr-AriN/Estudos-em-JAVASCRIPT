function mostraIdade(nome, idade){
    return `A idade de ${nome} é ${idade}`
}

function mostraCidade(nome, cidade){
    return `A cidade de ${nome} é ${cidade}`
}

function mostraHobby(nome, hobby){
    return `O hobby de ${nome} é ${hobby}`
}

// Uma forma de exportar
export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}

// Outra forma
// export function ...