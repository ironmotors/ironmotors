const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: /*'yourEmail',*/
        pass: /*'Password'*/
    }
})

module.exports = transporter
