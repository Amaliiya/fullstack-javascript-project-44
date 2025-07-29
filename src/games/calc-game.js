import { gamelogic } from '../index.js'
import readlineSync from 'readline-sync'
import { randomNum } from '../random-num.js'
const rules = 'What is the result of the expression?'
function calc() {
  const operators = ['+', '-', '*']
  const randomOperator = operators[Math.floor(Math.random() * operators.length)]
  const number1 = randomNum
  const number2 = randomNum
  console.log(`Question: ${number1} ${randomOperator} ${number2}`)
  const stranswer = readlineSync.question('Your answer: ')
  const answer = parseInt(stranswer, 10)
  let result
  switch (randomOperator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
  }
  return [result, answer, result === answer]
}
export const calcGame = () => gamelogic(rules, calc)
