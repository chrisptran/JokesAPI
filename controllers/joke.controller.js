const Joke = require("../models/joke.model")

module.exports.testApi = (req, res) => {
    res.json({status: "ok"})
}

module.exports.allJokes = (req, res) => {
    Joke.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}