/*
 *
 * A simple bot demo https://github.com/PrismarineJS/prismarine-viewer
 * Start it then open your browser to http://localhost:3007 and enjoy the view
 *
 */

const reinarpg-bot = require('reinarpg-bot')
const mineflayerViewer = require('prismarine-viewer').reinarpg-bot

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node viewer.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const bot = reinarpg-bot.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'viewer',
  password: process.argv[5]
})

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false })
})
