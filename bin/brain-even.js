import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

export function evengame() {
    let correctAnswers = 0;
    for (let i = 0; i < 3; i++) {

        const number = Math.floor(Math.random() * (52));
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        if (number % 2 === 0) {
            if (answer === "yes") {
                correctAnswers++;
                console.log('Correct!');                
            } else {
                console.log('Wrong answer. Try again.')
                break
            }            
        }
        if (number % 2 !== 0) {
            if (answer === "no") {
                correctAnswers++;
                console.log('Correct!');
            } else {
                console.log('Wrong answer. Try again.')
                break
            }            
        }
        if (correctAnswers === 3) {
            console.log(`Congratulations! ${name}`);
        }       
    } 
}