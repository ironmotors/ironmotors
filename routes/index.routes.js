const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const Post = require('../models/post.model')
const Car = require('../models/car.model')


router.get('/', (req, res, next) => {
    const carPromise = Car.find()
    const postPromise = Post.find()

    Promise.all([carPromise, postPromise])
        .then(data => res.render('index', {cars: data[0], posts: data[1]}))
        .catch(err => next(new Error(err)))
})

router.get('/users', (req, res, next) => {
    User.find()
        .then((allUsers) => res.render('profile/users-list', { allUsers }))
        .catch(err => next(new Error(err)))
})

router.get('/about-us', (req, res, next) => res.render('about-us'))

module.exports = router