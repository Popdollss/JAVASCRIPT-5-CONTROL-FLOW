const prompt = require ('prompt-sync')();

const ageString = prompt ( `Enter your age: `);
const age= Number (ageString) 

if (age >= 10 && age <= 14) {
    console.log ('O aluno pertence a turma: Infantil ');
}
else if (age >= 15 && age <= 17) {
    console.log ('O aluno pertence a turma: Juvenil');
}

else if (age <= 18 && age <= 25) {
    console.log ('O aluno pertence a turma: Adulto');
}