const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard-01',
    {useNewUrlParser: true, useUnifiedTopology: true});


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const questionsController = require('./controllers/questions-controller');
questionsController(app);

const quizzesController = require('./controllers/quizzes-controller');
quizzesController(app);

const quizAttemptsController = require('./controllers/quiz-attempts-controller');
quizAttemptsController(app);

app.listen(4000)