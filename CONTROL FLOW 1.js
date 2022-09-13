const prompt = require ('prompt-sync')();

const number1String= prompt ('Enter the first number: ');
const number1= Number (number1String);

const number2String= prompt ('Enter the second number: ');
const number2= Number (number2String);

const number3String= prompt ('Enter the trirth number: ');
const number3= Number (number3String);

if (number1>number2 && number1>number3) {

    console.log (`The biggest number is: ${number1} `);

}

else if (number2>number1 && number2>number3) {
    
    console.log (`The biggest number is: ${number2}`);

}

else {

    console.log (`the biggest number is: ${number3}`)

}