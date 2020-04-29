const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

const User = require('../models/user.model')
const Post = require('../models/post.model')
const Car = require('../models/car.model')


router.get('/', (req, res, next) => {
    const carPromise = Car.find().populate('creatorId')
    const postPromise = Post.find().populate('creatorId')

    Promise.all([carPromise, postPromise])
        .then(data => res.render('index', {cars: data[0], posts: data[1]}))
        .catch(err => next(new Error(err)))
})

router.get("/:carId/details", ensureLoggedIn('/signup'), (req, res, next) => {
  Car.findById(req.params.carId)
    .populate("creatorId")
    .then((car) => res.render("cars/cars-detail", car))
    .catch((err) => console.log("Ha habido un error!", err));
});


router.get('/about-us', (req, res, next) => res.render('about-us'))

module.exports = router