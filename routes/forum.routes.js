const express = require("express")
const router = express.Router()
// const passport = require("passport")
// const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const cloudUploader = require('../configs/cloudinary.config')

const User = require('../models/user.model')
const Post = require('../models/post.model')


router.get('/create', (req, res, next) => {
    Post.find()
        .populate('creatorId')
        .then((allPosts) => res.render('forum/forum-create', { allPosts }))
        .catch(err => next(new Error(err)))
})

router.post('/create', (req, res, next) => {
    console.log(req.body)

const { title, subtitle, comment, creatorId } = req.body
    // const newPost =
    // {
    //     title: req.body.title,
    //     subtitle: req.body.subtitle,
    //     comment: req.body.comment,
    //     // postPicPath: req.file.url,
    //     creatorId: req.body.creatorId
    // }
    Post.create({ title, subtitle, comment, creatorId })
        .then(() => console.log(req.body))
        .catch(err => next(new Error(err)))
})

router.get('/', (req, res, next) => {
    Post.find()
        .populate('creatorId')
        .then(allPost => res.render('forum/forum-list', { allPost }))
        .catch(err => next(new Error(err)))
})

module.exports = router