const internalIp = require('internal-ip')
const express = require('express')
const server = express()

const randomRolls = require('./randomRolls')
const app = require('../client/index')

server.get('/', (req, res) => {
  const page = app.toString('/')
  res.send(page)
})

server.get('/:diceNotation(\\d+d\\d+)', (req, res, next) => {
  const diceNotation = req.params.diceNotation.split('d')
  const n = diceNotation[0]
  const max = diceNotation[1]
  randomRolls(n, max).then((rolls) => {
    res.send(app.toString('/rolls', {rolls, sides: max, dice: n}))
  }).catch((error) => {
    console.error(error)
    res.send(app.toString('/error'))
  })
})

server.use(express.static('public'))

server.get('*', (req, res, next) => {
  res.send(app.toString('/error'))
})

const ip = internalIp()
const port = 3000
server.listen(port, () => {
  console.log(`Running app at http://${ip}:${port}`)
})
