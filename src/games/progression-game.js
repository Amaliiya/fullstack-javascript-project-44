import { gamelogic } from '../index.js'
import readlineSync from 'readline-sync'
import { randomNum } from '../random-num.js'
const rules = ('What number is missing in the progression?')

function progressionElem() {
  const start = randomNum
  const step = randomNum
  let numbers = []
  for (let i = 0; i <= (Math.floor(Math.random() * 6 + 5)); i++) {
    let elem = (start + i * step)
    numbers.push(elem)
  }
  return numbers
}

function progression(seq) {
  seq = progressionElem()
  let index = randomNum * seq.length
  let result = seq[index]
  seq[index] = '..'
  console.log(`Question: ${seq.join(' ')}`)
  const stranswer = readlineSync.question('Your answer: ')
  const answer = parseInt(stranswer, 10)
  return [result, answer, result === answer]
}

export const progressionGame = () => gamelogic(rules, progression)
