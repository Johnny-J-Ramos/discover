
 // 1. Declare uma variável de nome weight
 //let weight = 70.5;
//  // 2. Que tipo de dado é a variável acima?
// console.log(typeof weight) // String
 /*  3. Declare uma variável e atribua valores para cada um dos dados: 
      - name: String
      - age: Number (integer) inteiro
      - stars: Number (float) qubrado
      - isSubscribed: Boolean
*/ 

// let name, age, stars, isSubscribed;

//  name = 'Johnny';
//  age = 27; 
//  stars = 44.33;
//  isSubscribed = true;

 /*
      4. A variável student abaixo é de que tipo de dados:
console.log(typeof student)
      4.1 Atribua a ela as mesmas propriedades e valores do exercício 3. 

      4.2 Mostre no console a segunte mensagem:

         <name> de idade <age> peso <weight> pelos valores de cada propriedade do objeto
 */

   let student = {
      name: 'Johnny',
      age: 27,
      weight: 70.5,
      isSubscribed: true,
   };


   // console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg.`)

/*
      5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students = [
]

// console.log(students[5])

/*
      6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
   student
]


/*
      7. Coloque no console o valor da posição zero do array acima.
*/
// console.log(students[0])

/*
      8. Crie um novo student e coloque na posição 1 do Array students
 */

// const carlos = {
//    name: "Carlos",
//    age: 47,
//    weight: 76.5,
//    isSubscribed: false,
// }

// students = [
//    student,
//    carlos
// ]


// console.log(students[1])

/*
      9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou:

      console.log(a)
      var a = 1

      R: Será executado com a mensagem de erro de undefined, pois o mesmo é uma variável do tipo global. Como ensinado nos nas atividades anteriores, o VAR, e global, pois o mesmo roda dentro e fora de um escopo, porém despeitando a ordem de execução do escript, que é do primeiro para baixoitems.concat(valueN);
*/

console.log(a)
var a = 1

 
