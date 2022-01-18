// throw

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é necessário'
    }

    console.log(name)
}


// try catch

try {
    sayMyName('Mayk')
} catch(e) {
    console.log(e)
}
console.log('Após ao try/catch')