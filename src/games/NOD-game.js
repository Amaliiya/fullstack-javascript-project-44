import { gamelogic } from '../index.js'
import readlineSync from 'readline-sync'
import { randomNum } from '../random-num.js'
const rules = 'Find the greatest common divisor of given numbers.'

function nod() {
  const number1 = randomNum
  const number2 = randomNum
  console.log(`Question: ${number1} ${number2}`)
  const stranswer = readlineSync.question('Your answer: ')
  const answer = parseInt(stranswer, 10)
  let result

  let a = number1
  let b = number2
  if (number2 === 0) {
    result = number1
  }
  else {
    while (b !== 0) {
      let ostatok = a % b
      a = b
      b = ostatok
    }
    result = a
  }
  return [result, answer, result === answer]
}

export const nodGame = () => gamelogic(rules, nod)
