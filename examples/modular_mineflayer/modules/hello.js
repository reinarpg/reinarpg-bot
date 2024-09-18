const reinarpg-bot = require('reinarpg-bot') // eslint-disable-line

/**
 * @param {reinarpg-bot.Bot} bot // to enable intellisense
 */

module.exports = bot => {
  bot.addChatPattern('hello', /<(.+)> (?:Hello|hello)/, { parse: true })

  bot.on('chat:hello', ([[playerIgn]]) => {
    bot.chat(`Hi, ${playerIgn}`)
  })
}
