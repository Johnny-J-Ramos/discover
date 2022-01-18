
const scoreOfStudent = 10

let finalScore;


function getScore(scoreOfStudent) {
    const maxScore = scoreOfStudent >= 100
    const scoreA = scoreOfStudent >= 90
    const scoreB = scoreOfStudent >= 80 && scoreOfStudent <= 89
    const scoreC = scoreOfStudent >= 70 && scoreOfStudent <= 79
    const scoreD = scoreOfStudent >= 60 && scoreOfStudent <= 69
    const scoreF = scoreOfStudent < 60 && scoreOfStudent >= 0

    if(maxScore) {
        console.log("Parabéns, você atingiu a nota Máxima")
    } else if(scoreA) {
        console.log("Sua nota é A")
    } else if(scoreB) {
        console.log("Sua nota é B")
    } else if(scoreC) {
        console.log("Sua nota é C")
    } else if(scoreD) {
        console.log("Sua nota é D")
    } else if(scoreF) {
        console.log("Sua nota é F")
    } else {
        finalScore = "Nota inválida"
    }

    return finalScore;
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(70))
console.log(getScore(81))