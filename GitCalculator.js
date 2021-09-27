//package 
const readline = require("readline");

//interface 
const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //prompt: "Calculator> ",
});

const validOperators = [
    "*",
    "-",
    "+",
    "/",
];

calcInterface.question("Enter the first number: ", (firstInput) => {
    const firstNumber = Number(firstInput);
    console.log(firstNumber);
    if(isNaN(firstNumber)){
        console.log("Invalid number provided");
        return calcInterface.close();
    }

    calcInterface.question("Enter the operator: ", (operatorInput) => {
        if(!(validOperators.includes(operatorInput))){
             console.log("Invalid operator provided");
             return calcInterface.close();
        }

        calcInterface.question("Enter the second number: ", (secondInput) => {
            const secondNumber = number(secondInput);
            console.log(secondNumber);
            if(isNaN(secondNumber)){
                console.log("Invalid number provided");
                return calcInterface.close();
            }

            const result = calculatorLogic(firstNumber, operatorInput, secondNumber);

            console.log(`Your Result: ${result}`);
            calcInterface.close();
        })
    })
})

function calculatorLogic(firstNumber, operator, secondNumber){
    if(operator === "+") return firstNumber + secondNumber;
    else if(operator === "-") return firstNumber - secondNumber
    else if(operator === "*") return firstNumber * secondNumber
    else if(operator === "/") return firstNumber / secondNumber
}