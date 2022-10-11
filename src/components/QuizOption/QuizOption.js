import React, { useContext } from "react";
import { AnswerCheckerContext } from "../QuizPage/QuizPage";
import './QuizOption.css'

const QuizOption = ({ quizOptions, question, correctAnswer }) => {
  const checkAnswer = useContext(AnswerCheckerContext);
  
  return (
    <div className="flex">
      <input
        onClick={()=>checkAnswer(quizOptions,correctAnswer)}
        type="radio"
        name={question}
        value="quizOptions"
      />
      <label className="text-xl font-normal ml-3" >{quizOptions}</label>
      <br />
    </div>
  );
};

export default QuizOption;
