/* 
    Function() constructor
    
    * expressao new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = () => {
        return this.name + " Está Andando"
    }
}
const mayk = new Person("Mayk");
const joao = new Person("Joao");
console.log(mayk.walk())
console.log(joao.walk())