import { gamelogic } from "../src/index.js";
import readlineSync from 'readline-sync';
const rules = 'Answer "yes" if the number is even, otherwise answer "no"'

export function isEven() {
    const number = Math.floor(Math.random() * (52));
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    if (number % 2 === 0) {
        result = 'yes'
    } else result = 'no';
    
    return [result, answer, result === answer]
} 
export const evenGame = () => gamelogic(rules, isEven);