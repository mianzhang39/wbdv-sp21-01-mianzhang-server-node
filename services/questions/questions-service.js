const questionsDao = require("../../daos/questions-dao")
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
const updateAnswer = (quid, answer) => questionsDao.updateAnswer(quid, answer)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, updateAnswer}

























// // const questions = require("./questions.json")
//
// const questionsModel = require("../../models/questions/questions-model")
//
// const findAllQuestions = () => {
//     // return questions
//     return questionsModel.find()
// }
//
// const findQuestionsForQuiz = (qzid) => {
//     // return questions.filter((question) => {
//     //     return question.quizId === qzid;
//     // })
//     return questionsModel.find({quizId : qzid})
// }
// const findQuestionById = (quid) => {
//     // return questions.find((question) => {
//     //     return question._id === quid;
//     // })
//     return questionsModel.findById(quid)
// }
//
//
// module.exports = {
//     findAllQuestions, findQuestionById,
//     findQuestionsForQuiz
// }