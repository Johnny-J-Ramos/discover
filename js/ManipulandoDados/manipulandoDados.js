// ##01 Manipulando Dados 
   /*
      Prototype
      * prototype_based language
      * prototype chain
      * __proto__
   */


// ##02 

   /*
      Type conversion (typecasting) vs Type coersion
         * Alteração de um tipo de dados para outro tipo 
   */
   // console.log('6' + 4) // ele vai concatenar 64
   console.log(Number('6') + 4) // ele vai aplicar o type conversion

// ##03 Manipulando Strings e Números

   // Transformar String em Número e Número em String
   let string = "123";
   console.log(Number(string));
   let number = 321;
   console.log(String(number));

// ##04 Contar quantos caracteres tem uma palavra e quantas dígitos tem um número

   const word = "paralelepipedo"
   console.log(word.length)
   let number = 3424232
   console.log(String(number).length)

// ##05 Transformar um número quebrado com 2 casas decimais trocando o ponto por vírgula

   let number = 4243.54664565
   console.log(number.toFixed(2).replace(".",",")) // função atrelada ao Number toFixed. Coloca a quantidade de casa decimais

// ##06 Transformando letras munúsculas em maiúsculas, e também o contrário. 

   let string = "Programar é muito bacana"
   console.log(string.toUpperCase()) // toUpperCase transforma todas as letras em Maiúsculo

   let word = "Eu gosto muito de estudar "
   console.log(word.toLowerCase()) // toLowerCase transforma todas as letras em minusculo

// ##07 Separar um texto que contem espaços, em um novo array onde cada texyo é uma posição do array. Depois disso, será transformado o array em um texto e onde era espaços, colque -

   let texto = "Nos estamos pronto para seguir em frente,  da situação.";
   let myArray = texto.split(" ") // Transformou String em Array
   let textJoin = myArray.join("_") // Colocou no lugar nos espaços o _
   console.log(textJoin.toUpperCase())

// ##08 Verificar se o texto contém a palavra Amor

   let phrase = "Eu quero viver o Amor"
   console.log(phrase.includes("Amor")) // Virifica se existe "argumentos passado"

// ##09 Criar Array com Construtor

   const myArray = new Array('a', 'b', 'c');
   console.log(myArray) // Cria um array construtor, ou seja, transforma o array em argumentos e preenche os espaços modo array construct

// ##10 Contar elemento de um Array

   console.log(['a','b','c'].length) // mostra quantos elementos tem no Array

// ##11 Transformar uma cadeia de caracteres em elementos de um array 

   let name = "johnny"
   console.log(Array.from(name)) // O Array.from() vai transformar o caractere criado em um array com elemento por sessão. 

// ##12 Manipulando Array

let techs = ['html', 'css', 'js']
   // adicionar um item no fim
   techs.push('nodejs')
   // adicionar no começo
   techs.unshift('logica de Programação')
   // remover do fim
   techs.pop()
   // remover do começo
   techs.shift()
   // pegar somente alguns elementos do array
   console.log(techs.slice(1,3)) // Será passado dois argumentos. O primeiro paço a posição de inicio e o outro, a posição final do mesmo.
   // remover 1 ou mais itens em qualquer posição do array
   techs.splice(1, 2) // Será passado dois argumentos. O primeiro a posição de inicio e o segundo, a quantidade.
   // encontrar a posição de um elemnto no array
   let index = techs.indexOf('css')
   techs.splice(index, 1)


console.log(techs)
