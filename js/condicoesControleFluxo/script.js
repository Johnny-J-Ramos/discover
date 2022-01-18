// Control flow - controle de fluxo
// control err - controle de erros

// #001 if and else - se ou senão

        let temperature = 38

        if(temperature >= 35.5) {
            // console.log('esta com febre alta')
        } else if( temperature < 37.5 && temperature >= 37) { //multiplas condições
            // console.log('febre moderada')
        } else {
            // console.log('Saudável')
        }


// #002 switch

        function calculate(number1, operador, number2) {
            let result = 0;
           
            switch (expression) {
                case '+':
                    // código
                    result = number1 + number2
                    break
                case '-':
                    // código
                    result = number1 - number2
                    break
                case '*':
                    // código
                    result = number1 * number2
                    break
                case '/':
                    // código
                    result = number1 / number2
                    break
                default:
                    console.log('não implementar')
            }

            return result
        }


        console.log(calculate(1, '+', 2))
        

// #003 throw e try/Catch  throw disparar | catch pegar try tentar 
        
 