module.exports = (app) => {
    const questionService = require("../services/questions/questions-service.js")

    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions()
        questionService.findAllQuestions()
            .then((questions) => {
            res.send(questions)
        })
        // res.send(questions)
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // const questions = questionService.findQuestionsForQuiz(quizId);
        // res.send(questions);
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const qid = req.params['qid']
        questionService.findQuestionById(qid)
            .then(question => res.json(question))
}



    const updateAnswer = (req, res) => {
            const quid = req.params['quid']
            const answer = req.body
            questionService.updateAnswer(quid,answer)
                .then((answer) => {
                    res.send(answer)
                })
        }


    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.put("/api/questions/:qid", updateAnswer);
    app.get("/api/questions/:qid", findQuestionById);
}