/**
 * A quick and easy implementation of the collect block plugin. (Requires reinarpg-bot-pathfinder and reinarpg-bot-collectblock)
 */
const reinarpg-bot = require('reinarpg-bot')
const pathfinder = require('reinarpg-bot-pathfinder').pathfinder
const collectBlock = require('reinarpg-bot-collectblock').plugin

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node collectblock.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const bot = reinarpg-bot.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'collector',
  password: process.argv[5]
})

// Load pathfinder and collect block plugins
bot.loadPlugin(pathfinder)
bot.loadPlugin(collectBlock)

// Listen for when a player says "collect [something]" in chat
bot.on('chat', (username, message) => {
  const args = message.split(' ')
  if (args[0] !== 'collect') return

  // Get the correct block type
  const blockType = bot.registry.blocksByName[args[1]]
  if (!blockType) {
    bot.chat("I don't know any blocks with that name.")
    return
  }

  bot.chat('Collecting the nearest ' + blockType.name)

  // Try and find that block type in the world
  const block = bot.findBlock({
    matching: blockType.id,
    maxDistance: 64
  })

  if (!block) {
    bot.chat("I don't see that block nearby.")
    return
  }

  // Collect the block if we found one
  bot.collectBlock.collect(block, err => {
    if (err) bot.chat(err.message)
  })
})
