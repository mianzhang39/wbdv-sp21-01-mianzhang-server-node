const questionsModel = require("../../models/questions/questions-model")
const quizzesModel = require("../models/quizzes/quizzes-model")

const findAllQuestions = () => {
    // return questions
    return questionsModel.find()
}

const findQuestionsForQuiz = (qzid) => {
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
    return questionsModel.find({quizId : qzid})
}
const findQuestionById = (quid) => {
    // return questions.find((question) => {
    //     return question._id === quid;
    // })
    return questionsModel.findById(quid)
}


module.exports = {
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz
}