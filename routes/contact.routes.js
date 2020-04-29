const express = require('express')
const router = express.Router()
const mailer = require('../configs/nodemailer.config')

router.get('/', (req, res, next) => res.render('contact-us'))
router.post('/', (req, res, next) => {
    let { email, subject, message } = req.body;

    mailer.sendMail({
      from: '"Social_Motors" <Social_Motors@gmail.com>',
      to: email, 
      subject: subject, 
      text: message,
      html: `<b>${message}</b>`
    })
    .then(info => res.render('email-sent', {email, subject, message, info}))
    .catch(error => console.log(error));
  });
  


  module.exports = router