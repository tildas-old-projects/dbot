
// Core web server (express for app, serve-static for serving files, and path for dir joining)
const e = require('express')
const s = require('serve')
const p = require('path')
const bot = require('../bot/core')
// TODO: Show bot stats (may be a bit hard depending on if I can carry library stats to another file.)

const a = e()

a.use(s(p.join(__dirname, 'views')))
a.listen(3000)
