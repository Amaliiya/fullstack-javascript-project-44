import { gamelogic } from "../src/index.js";
import readlineSync from 'readline-sync';
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"'

function isPrime(number) {

    if ((number < 2) || ((number % 2) === 0)) {
        return 'no';
    }
    if (number === 2) {
        return 'yes';
    }
    for (let num = 3; num <= (Math.floor(number**0.5) + 1); num++) {
        if ((number % num) === 0) {
            return 'no';
        }    
    }
    return 'yes'
}
function primenumber() {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let result = isPrime(number);
    return [result, answer, result === answer]
}

export const isPrimeGame = () => gamelogic(rules, primenumber);
