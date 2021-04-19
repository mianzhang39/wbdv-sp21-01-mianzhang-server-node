
const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }















// // const quizzes = require("./quizzes.json")
// const quizzesModel = require("../../models/quizzes/quizzes-model")
//
// // const findQuizzesForCourse = (courseId) => {
// //     return quizzes.filter((quiz) => {
// //         return quiz.courseId === courseId;
// //     })
// // }
// const findAllQuizzes = () => {
//     // return quizzes
//     return quizzesModel.find()
// }
// const findQuizById = (qid) => {
//     // return quizzes.find((quiz) => {
//     //     return (quiz._id === qid)
//     // })
//     return quizzesModel.findById(qid)
//         .populate("questions")
//         .exec()
// }
//
// module.exports = {
//     findAllQuizzes, findQuizById,
// }