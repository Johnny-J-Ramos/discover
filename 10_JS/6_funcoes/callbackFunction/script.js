// callback Function

function sayMyName(name) {
    console.log('Antes de uma callback')
    name()
    console.log('Depois de uma callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
);