import { gamelogic } from "../src/index.js";
import readlineSync from 'readline-sync';
const rules = ('What number is missing in the progression?');

function progressionElem() {
    const start = Math.floor(Math.random() * 10);        
    const step = Math.floor(Math.random() * 15);
    let numbers = [];
    for (let i = 0; i <= (Math.floor(Math.random() * 6 + 5)); i++) {
        let elem = (start + i * step);  
        numbers.push(elem)        
    }
    return numbers;
} 

function progression(seq) {
    seq = progressionElem()    
    
    let index = Math.floor(Math.random() * seq.length)
    let result = seq[index]
    seq[index] = '..'

    
    console.log(`Question: ${seq.join(' ')}`);
    const stranswer = readlineSync.question('Your answer: ');
    const answer = parseInt(stranswer, 10);
    return [result, answer, result === answer]
}

export const progressionGame = () => gamelogic(rules, progression);