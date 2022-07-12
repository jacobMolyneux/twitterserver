const Tweet = require('../models/tweetModel')
const User = require('../models/userModels')

exports.get_tweets = (req, res) => {
    
    res.json('Get Tweets Endpoint')
}

exports.create_tweet = (req, res) => {
    let tweet = new Tweet(
        {
            author: req.body.author,
            text: req.body.text,
            created_at: Date.now(),
            likes: 0
        }
    )
    tweet.save(function(err) {
        if (err) {return next(err)}
        res.redirect(tweet.url)
    })
    res.json('Create Tweet Endpoint')
}
exports.like_tweet = (req, res) => {
    let id = req.body.id
    Tweet.findByIdAndUpdate({_id: id}, {$inc : {likes: 1}})
    res.json(`tweet updated now has more likes`)
}

exports.delete_tweet = (req, res) => {
    tweet_id = req.body.id,
    Tweet.deleteOne({id: tweet_id}, function (err){
        if (err) return next(err)
    })
    res.json(`deleted tweet ${tweet_id}`)
}