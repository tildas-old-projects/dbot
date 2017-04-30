const e = require('eris')

// Please edit config.json with your token.
const conf = JSON.parse(require('fs').readFileSync('config.json', 'utf8'))

// You may change this desc, the owner, and prefix.
const bot = new e.CommandClient(conf.token, {}, {
  description: conf.desc,
  owner: conf.owner,
  prefix: conf.prefix
})

bot.on('ready', () => {
  console.log('dbot - discord responded with ready')
})

bot.registerCommand('about', 'my name is dbot and I live in a computer. https://github.com/xshotD/dbot', {
  description: 'who am I? run this to find out',
  fullDescription: ':thinking:'
})

bot.registerCommand('generic', 'generic sucks', {
  description: 'what is generic',
  fullDescription: 'lmao im gonan die'

bot.connect()
