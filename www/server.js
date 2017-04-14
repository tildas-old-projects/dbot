
// Core web server (express for app, serve-static for serving files, and path for dir joining)
const e = require('express')
const s = require('serve')
const p = require('path')
const b = require('eris')
// Required for reading config
const f = require('fs')
// Please edit config.json with your token.
const conf = JSON.parse(f.readFileSync('config.json', 'utf8'))
// TODO: Show bot stats (may be a bit hard depending on if I can carry library stats to another file.)

const a = e()

const bot = new b.CommandClient(conf.token, {}, {
  description: 'A test bot made with Eris',
  owner: 'lold#4960',
  prefix: '&'
})

bot.on('ready', () => {
  console.log('dbot - discord responded with ready')
})

bot.registerCommand('about', 'my name is dbot and I live in a computer. https://github.com/xshotD/dbot', {
  description: 'who am I? run this to find out',
  fullDescription: ':thinking:'
})

a.use(s(p.join(__dirname, 'views')))
a.listen(3000)
bot.connect()
