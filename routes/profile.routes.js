const express = require("express")
const router = express.Router()
const passport = require("passport")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const cloudUploader = require('../configs/cloudinary.config')

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

router.post('/edit/:id', cloudUploader.single('profilePicPath'), (req, res, next) => {
    const editUser =
        {
            username: req.body.username,
            email: req.body.email,
            profilePicPath: req.file.url,
            age: req.body.age,
            address: req.body.address,
            dni: req.body.dni,
            phoneNumber: req.body.phoneNumber
        } 
    User.findByIdAndUpdate(req.params.id, { editUser }, { new: true })
        .then(() => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})

module.exports = router