require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
app.use('/profile', require('./routes/profile.routes'))


app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/auth.routes'))
app.use('/cars', require('./routes/car.routes'))
app.use('/forum', require('./routes/forum.routes'))
app.use('/contact', require('./routes/contact.routes'))


module.exports = app