const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (qid) => quizzesModel.findById(qid)
module.exports = { findAllQuizzes, findQuizById }


// const findQuizById = (qid) => {
//     return quizzesModel.findById(qid)
//         .populate("questions")
//         .exec()
// }

