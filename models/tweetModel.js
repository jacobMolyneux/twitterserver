const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true, minlength: 1, maxlength: 140},
    created_at: {type: Date, default: Date.now()},
    likes: {type: Number, default :0}
})

module.exports = mongoose.model('Tweet', TweetSchema)