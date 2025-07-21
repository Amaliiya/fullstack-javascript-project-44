import { gamelogic } from "../src/index.js";
import readlineSync from 'readline-sync';
const rules = 'Find the greatest common divisor of given numbers.'

function nod() {
    const number1 = Math.floor(Math.random() * (100));
    const number2 = Math.floor(Math.random() * (100));
    console.log(`Question: ${number1} ${number2}`); 
    const stranswer = readlineSync.question('Your answer: ');
    const answer = parseInt(stranswer, 10);
    let result;
    switch (number2) {
        case 0:
            result = number1
            break;
        case !0:
            result = a % b;
            break;
        default :
            break;
    }
    return [result, answer, result === answer]
}

export const nodGame = () => gamelogic(rules, nod);