// Imprime aprovados
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguél',
        nota: 3,
        turma: '2C'
    }
]

function alunosAprovados(arr, media){
    let aprovados = [] //Array auxiliar
    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i] // Encurtar o cód

        if(nota >= media){
            aprovados.push(nome)
        }
        // if(arr[i].nota >= media){
        //     aprovados.push(arr[i].nome)
        // }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))




// Calcula idade
function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Carla',
    idade: 26
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.call(animal, 7))
console.log(calculaIdade.apply(animal, [4]))
console.log(calculaIdade.apply(pessoa1, [4]))