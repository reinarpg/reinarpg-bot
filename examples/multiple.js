const reinarpg-bot = require('reinarpg-bot')

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('Usage : node multiple.js <host> <port>')
  process.exit(1)
}

let i = 0
function next () {
  if (i < 10) {
    i++
    setTimeout(() => {
      createBot(`reinarpg-bot-bot${i}`)
      next()
    }, 100)
  }
}
next()

function createBot (name) {
  reinarpg-bot.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: name
  })
}
