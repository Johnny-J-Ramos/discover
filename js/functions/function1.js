
// ## 001 CRIANDO UMA FUNCTION ANONIMA - ANONYMOUS
      // const sum = function(Number1, Number2) { // dentro da function, é passado os parametros 
      //    let total = Number1 + Number2 
      //    return total
      
      // }

      // // sum(2, 3) //argumentos

      // let number1 = 40;
      // let number2 = 443;

      // console.log(`O numero 1 é ${number1}`)
      // console.log(`O número 2 é ${number2}`)
      // console.log(`A soma é ${sum(number1, number2)}`)

//## 2º Exemplo de Function

      // function fazerSuco(fruta1, fruta2) {
      //    let total = fruta1 + fruta2;
      //    return total;
      // }
      
      // const copo = Liquidificador('maça', 'Banana') //arguentos

      // console.log(copo)


// ## 002 FUNCTION SCOPE 
      // let subject = 'creat video'

      // function createThink(subject) {
      //    subject = 'styd'
      //    return subject
      // }

      // console.log(createThink(subject))
      // console.log(subject)


// ## 003 FUNCTION HOISTING - SOBREPOSIÇÃO

// ## 004 ARROY FUNCTION = criando funções de modo moderno

      // const sayMyName = () => {
      // console.log('Johnny')
      // }

      // sayMyName()


// ## 005 CALLBACK FUNCTION - Chamar de volta

      // function sayMyName(name) {
      //    console.log('antes de executar uma função callback')
         
      //    name() // callback será chamada de volta

      //    console.log('depois de executar uma função callback')
      // }

      // sayMyName(
      //    () => {
      //       console.log('estou em uma callbeck')
      //    }
         
      // )

// ## 2º Exemplo de callback
      // function greeting(name) {
      //    alert('Hello'.concat(name)) 
      // }

      // function processYserUnput(callback) {
      //    const name= prompt('Please enter your name.')
      //    callback(name)
      // }

      // processYserUnput(greeting)


// ## 006 FUNCTION() CONSTRUCTOR
      // expressão new
      // criar um nobo objeto
      // this key word

function Person(name) {
   this.name = name;
   this.walk = function() {
      return this.name + " esta andando "
   }
}

const johnny = new Person("johnny")
const jefferson = new Person("Jefferson") // inslanciar um novo objeto

console.log(johnny.walk())
console.log(jefferson.walk())
