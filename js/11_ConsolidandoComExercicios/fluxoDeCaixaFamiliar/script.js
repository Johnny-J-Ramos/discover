let family = {
    recipes: [
    10, 20, 30, 40
    ],
    expenses: [
    10, 30
    ]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value;
    }

    return total;
}

function calculteTotal() {
    const calculateRecipes = sum(family.recipes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateRecipes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = 'Negativo'

    if(itsOk) {
        balanceText = 'Positivo'
    }

    console.log(`Seu saldo é ${balanceText}, saldo atual: R$${total.toFixed(2)}`)
}

calculteTotal()