const express = require("express")
const router = express.Router()
const passport = require("passport")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const cloudUploader = require('../configs/cloudinary.config')

const User = require('../models/user.model')
const Post = require('../models/post.model')


router.get('/create', ensureLoggedIn(), (req, res, next) => res.render('forum/forum-create'))

router.post('/create', cloudUploader.single('pepe'), ensureLoggedIn(), (req, res, next) => {
    console.log(req.body.title)
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

router.get('/', (req, res, next) => {
    Post.find()
        // .populate('creatorId')
        .then(allPost => res.render('forum/forum-list', { allPost }))
        .catch(err => next(new Error(err)))
})

// router.get('/edit/:id', (req, res, next) => res.render('forum/forum-edit'))

// router.post('/edit/:id', (req, res, next) => {
//     const editPost =
//     {
//         title: req.body.title,
//         subtitle: req.body.subtitle,
//         comment: req.body.comment,
//         // postPicPath: req.file.url,
//         // creatorId: req.body.creatorId
//     }
//     Post.findByIdAndUpdate(req.params.id,  editPost , { new: true })
//         .then(() => res.redirect('/forum'))
//         .catch(err => next(new Error(err)))
// })

// router.get('/delete/:id', (req, res, next) => {
//     console.log(req.post.id)
//     Post.findByIdAndRemove(req.post.id)
//         .then(() => res.redirect('/'))
// })
module.exports = router