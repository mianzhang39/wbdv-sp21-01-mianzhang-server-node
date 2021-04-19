const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-schema')
const quizAttemptSchema = mongoose.Schema({
    _id: String,
    score: Number,
    quiz: {type: String, ref: 'QuizzesModel'},
    answers: [questionSchema]
}, {collection: 'quizAttempts'})
module.exports = quizAttemptSchema

