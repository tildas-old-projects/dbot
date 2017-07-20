const e = require('eris')

// Please edit config.json with your token.
const conf = JSON.parse(require('fs').readFileSync('config.json', 'utf8'))

// You may change this desc, the owner, and prefix.
const bot = new e.CommandClient(conf.token, {}, {
  description: conf.desc,
  owner: 'Someone',
  prefix: conf.prefix
})

bot.on('ready', () => {
  console.log('dbot - discord responded with ready')
})

bot.registerCommand('about', 'my name is dbot and I live in `' + require('os').hostname() + '` https://github.com/tilda/dbot', {
  description: 'who am I? run this to find out',
  fullDescription: ':thinking:'
})

bot.registerCommand('generic', 'generic sucks', {
  description: 'what is generic',
  fullDescription: 'lmao im gonan die'
})

bot.on('messageCreate', (msg, args, err) => {
  if (msg.content === conf.prefix + 'shutdown') {
    if (msg.author.id === conf.owner) {
      bot.createMessage(msg.channel.id, 'ok bye')
      process.exit(1)
    } else {
      bot.createMessage(msg.channel.id, 'no')
    }
  }
  if (msg.content === conf.prefix + 'exec') {
    if (msg.author.id === conf.owner) {
      const lol = require('shelljs').exec(args.toString())
      if (lol.code !== 0) {
        bot.createMessage(msg.channel.id, 'Error!\n\`\`\`' + err.toString() + '\n\`\`\`')
      } else {
	 bot.createMessage(msg.channel.id, 'Success \`\`\`\n' + lol + '\n\`\`\`')
      }
    }
  }
})

bot.connect()
