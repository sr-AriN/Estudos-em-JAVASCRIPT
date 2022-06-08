// Printa no terminal
console.log("Hello word!");

// função simples
function returnEvenValues(array){
    // Variável loca "let" //  global "var"
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            // `` Template de strings
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);