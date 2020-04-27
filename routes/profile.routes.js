const express = require("express")
const router = express.Router()
const passport = require("passport")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User = require ('../models/user.model')


router.get('/profile', ensureLoggedIn('/profile'), (req, res, next) => {
    User.find()
        .then((theUser) => res.render('profile/profile',  { theUser: theUser[0].username }))
        .catch(err => next(new Error(err)))
})


module.exports = router