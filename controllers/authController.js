const User = require('../models/userModels')

exports.create_account = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save(function(err) {
        if (err){
            return next(err)
        }
        else {
            res.status(200)
            res.json(`new user created : username: ${req.body.username}`)
        }
    })
    
}

exports.sign_in = function(req, res, next){
    res.json('Not Implemented: Sign In')
}

exports.log_out = function(req, res, next){
    res.json('Not IMplemented: Log Out')
}