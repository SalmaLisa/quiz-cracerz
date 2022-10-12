import React, { useContext } from "react";
import { AnswerCheckerContext } from "../QuizPage/QuizPage";
import "./QuizOption.css";

const QuizOption = ({ quizOptions, question, correctAnswer }) => {
  const checkAnswer = useContext(AnswerCheckerContext);
  return (
    <div className="flex">
      <label className="text-xl font-normal ml-3 flex items-center mb-2">
      <input
        onClick={() => checkAnswer(quizOptions, correctAnswer)}
        type="radio"
        name={question}
        value="quizOptions"
      />
        <p className='ml-3'>{quizOptions}</p></label>
      <br />
    </div>
  );
};

export default QuizOption;
