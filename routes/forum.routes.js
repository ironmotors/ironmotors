const express = require("express")
const router = express.Router()
const passport = require("passport")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const cloudUploader = require('../configs/cloudinary.config')

const User = require('../models/user.model')
const Post = require('../models/post.model')


router.get('/create', ensureLoggedIn(), (req, res, next) => res.render('forum/forum-create'))

router.post('/create', cloudUploader.single('pepe'), ensureLoggedIn(), (req, res, next) => {
    const newPost =
    {
        title: req.body.title,
        subtitle: req.body.subtitle,
        comment: req.body.comment,
        postPicPath: req.file.url,
        creatorId: req.user._id
    }
    Post.create(newPost)
        .then(() => res.redirect('/forum'))
        .catch(err => next(new Error(err)))
})

router.get('/', ensureLoggedIn(), (req, res, next) => {
    Post.find()
        .populate('creatorId')
        .then(allPost => res.render('forum/forum-list', { allPost }))
        .catch(err => next(new Error(err)))
})

router.get('/edit/:id', ensureLoggedIn(), (req, res, next) => {
    Post.findById(req.params.id)
        .populate('creatorId')
        .then((editPost) => res.render('forum/forum-edit',  editPost ))
        .catch(err => next(new Error(err)))
}) 


router.post('/edit/:id', cloudUploader.single('paco'), ensureLoggedIn(), (req, res, next) => {
    const editPost =
    {
        title: req.body.title,
        subtitle: req.body.subtitle,
        comment: req.body.comment,
        postPicPath: req.file.url,
        creatorId: req.user._id
    }
    Post.findByIdAndUpdate(req.params.id, editPost, { new: true })
        .then(() => res.redirect('/forum'))
        .catch(err => next(new Error(err)))
})

router.get('/delete', ensureLoggedIn(), (req, res, next) => {
    console.log(req.user.id)
    Post.findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/forum'))
        .catch(err => next(new Error(err)))
})
module.exports = router