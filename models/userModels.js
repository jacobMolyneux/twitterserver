const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String, required: true, minlength: 3, maxlength: 32},
  password: {type: String, required: true, minlength: 5, maxlength: 32},
  tweets: [{type: Schema.Types.ObjectId, ref: 'Tweet'}]
  
})


module.exports = mongoose.model('User', UserSchema)