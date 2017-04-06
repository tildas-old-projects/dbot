const e = require('eris');

const fs = require('fs');

// Please edit config.json with your token.
var conf = JSON.parse(fs.readFileSync('../config.json', 'utf8'));

// You may change this desc, the owner, and prefix.
const bot = new e.CommandClient(conf.token, {}, {
    description: "A test bot made with Eris",
    owner: "lold#4960",
    prefix: "&&"
});

bot.on("ready", () => {
    console.log("dbot - discord responded with ready");
    console.log("dbot stats:");
    console.log("servers: ", bot.client.guilds);
    console.log("total users: ", bot.client.users);
});


bot.connect();
