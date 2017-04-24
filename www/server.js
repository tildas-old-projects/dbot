
// Core web server (express for app, serve-static for serving files, and path for dir joining)
const e = require('express')
const s = require('serve-static')
const p = require('path')
const a = e()
// TODO: Show bot stats (will be hard, help needed)
a.use(s(p.join(__dirname, 'views')))
a.listen(3000)
