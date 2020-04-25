const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    subtitle: String,
    comment: String,
    postPicPath: String,
    creatorId: {
         type: Schema.Types.ObjectId,
         ref: "User"
     },
}, {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post