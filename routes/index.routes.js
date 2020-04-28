const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.get('/', (req, res) => res.render('index'))

router.get('/users', (req, res, next) => {
    User.find()
        .then((allUsers) => res.render('profile/users-list', { allUsers }))
        .catch(err => next(new Error(err)))
})

module.exports = router