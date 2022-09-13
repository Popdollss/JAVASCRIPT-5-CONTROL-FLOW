const prompt = require ('prompt-sync') ();

const number1String = prompt ('Enter the number: ');
let number1 = Number (number1String);

if (number1 % 2 == 0 ) {

    number1 = Math.sqrt (number1)
    console.log (`The number is even and its square root has the value of:  ${number1} `);

}
else  {
    number1 = Math.pow (number1, 2)
   
    console.log (`The number is odd and squared has the value of: ${number1}`);
}