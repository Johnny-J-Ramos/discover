// Manipulação de strings e números

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ 

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase())
