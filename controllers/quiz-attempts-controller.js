const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {

    const CreateAttempt = (req, res) => {
        const qid = req.param['qid']
        quizAttemptDao.createAttempt(qid, req.body)
            .then(attempt => res.send(attempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        const qid = req.param['qid']
        quizAttemptDao.findAttemptsForQuiz(qid)
            .then(attempts => res.send(attempts))
}


    app.post('/api/quizzes/:qid/attempts', CreateAttempt)
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz)
}
