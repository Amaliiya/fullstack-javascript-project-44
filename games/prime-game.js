import { gamelogic } from "../src/index.js";
import readlineSync from 'readline-sync';
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"'

function isPrime(number) {

    let isprime;
    if ((number < 2) || ((number % 2) === 0)) {
        isprime = 'no';
    }
    if (number === 2) {
        isprime = 'yes';
    }
    for (let num = 2; num <= (Math.floor(number**0.5) + 1); num++) {
        if (number % num === 0) {
            isprime = 'no';
        } else isprime = 'yes'
    }
    return isprime
}

function primenumber() {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let result = isPrime(number);
    return [result, answer, result === answer]
}

export const isPrimeGame = () => gamelogic(rules, primenumber);
