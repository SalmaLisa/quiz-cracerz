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
      Swal.fire({
        icon: "success",
        title: "Wow ! Right Answer",
      });
      const alreadyAnswered = rightAnswers.find(
        (rightAnswer) => rightAnswer === quizOptions
      );
      if (!alreadyAnswered) {
        const rightAns = [...rightAnswers, quizOptions];
        setRightAnswers(rightAns);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...Wrong Answer!",
      });
      const alreadyAnswered = wrongAnswers.find(
        (rightAnswer) => rightAnswer === quizOptions
      );
      if (!alreadyAnswered) {
        const wrongAns = [...wrongAnswers, quizOptions];
        setWrongAnswers(wrongAns);
      }
    }
  };
  return (
    <AnswerCheckerContext.Provider value={checkAnswer}>
      <div className="quiz-page grid grid-cols-3 w-4/5 mx-auto relative">
        <div className="col-span-2">
          {quiz.map((singleQuiz) => (
            <SingleQuiz singleQuiz={singleQuiz} key={singleQuiz.id} />
          ))}
        </div>
        <div className="counter-section sticky top-0 mt-9 ml-20 p-8 border border-blue-200 rounded">
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
