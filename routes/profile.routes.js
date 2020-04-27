const express = require("express")
const router = express.Router()
const passport = require("passport")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User = require ('../models/user.model')


router.get('/', ensureLoggedIn('/profile'), (req, res, next) => {
    User.findById(req.user.id)
        .then((theUser) => res.render('profile/profile', theUser))
        .catch(err => next(new Error(err)))
})

router.get('/edit/:id', ensureLoggedIn('/profile'), (req, res, next) => {
    User.findById(req.user.id)
        .then(() => res.render('profile/profile-edit'))
        .catch(err => next(new Error(err)))
})

router.post('/edit/:id', (req, res, next) => {
    const { username, email, profilePicPath, age, address, dni, phoneNumber } = req.body
    User.findByIdAndUpdate(req.params.id, { username, email, profilePicPath, age, address, dni, phoneNumber }, { new: true })
        .then(() => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})

module.exports = router