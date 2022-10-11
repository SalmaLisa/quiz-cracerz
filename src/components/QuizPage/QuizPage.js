import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./QuizPage.css";
import Swal from "sweetalert2";

export const AnswerCheckerContext = createContext();
const QuizPage = () => {
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const quizzes = useLoaderData();
  const quiz = quizzes.data.questions;

  const checkAnswer = (quizOptions, correctAnswer) => {
    if (quizOptions === correctAnswer) {
     
      const alreadyAnswered = rightAnswers.find(
        (rightAnswer) => rightAnswer === quizOptions
      );
      if (!alreadyAnswered) {
        Swal.fire({
          icon: "success",
          title: "Wow ! Right Answer",
        });
        const rightAns = [...rightAnswers, quizOptions];
        setRightAnswers(rightAns);
      }
    } else {
     
      const alreadyAnswered = wrongAnswers.find(
        (rightAnswer) => rightAnswer === quizOptions
      );
      if (!alreadyAnswered) {
        Swal.fire({
          icon: "error",
          title: "Oops...Wrong Answer!",
        });
        const wrongAns = [...wrongAnswers, quizOptions];
        setWrongAnswers(wrongAns);
      }
    }
  };
  return (
    <AnswerCheckerContext.Provider value={checkAnswer}>
      <h1 className="text-center font-bold text-4xl my-12 text-slate-700">Questions Regarding <span className="text-blue-800 italic">{quizzes.data.name}</span></h1>
      <div className="quiz-page flex md:mx-20 relative">
        <div className="quiz-container">
          {quiz.map((singleQuiz) => (
            <SingleQuiz singleQuiz={singleQuiz} key={singleQuiz.id} />
          ))}
        </div>
        <div className="counter-section sticky top-0 md:mt-9 md:ml-9 p-8 border border-blue-200 rounded bg-white">
          <p className="text-green-700 text-xl font-semibold">
            Right Answer : {rightAnswers.length}
          </p>
          <p className="text-red-600 text-xl font-semibold">
            Wrong Answer : {wrongAnswers.length}
          </p>
        </div>
      </div>
    </AnswerCheckerContext.Provider>
  );
};

export default QuizPage;
