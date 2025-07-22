import readlineSync from 'readline-sync';
export function gamelogic(rules, game) {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log(rules);
    let correctAnswers = 0;
    for (let i = 0; i < 3; i++) {
        const [result, answer, correct] = game();
        if (correct === true) {
            correctAnswers++;
            console.log('Correct!');
        }
        if (correct === false) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`)
            break
        }
    }
    if (correctAnswers === 3) {
            console.log(`Congratulations, ${name}!`);
        } 
}