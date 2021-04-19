const questionsModel = require("../models/questions/questions-model")
const quizzesModel = require("../models/quizzes/quizzes-model")

const findAllQuestions = () => questionsModel.find()


const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
    .populate('questions').then(quiz => quiz.questions)


const findQuestionById = (quid) => questionsModel.findById(quid)

const updateAnswer = (quid, answer) =>
    questionsModel.findByIdAndUpdate(quid, {$set:{answer:answer}})
    // quizAttemptsModel.create({ quiz: qid, answers: attempt, score: scoreQuiz(attempt) })

module.exports = {
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,updateAnswer
}

