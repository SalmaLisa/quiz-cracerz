import React from "react";
import './QuizOption.css'

const QuizOption = ({ quizOptions, question, correctAnswer }) => {
  console.log(quizOptions,correctAnswer);
  const checkAnswer = (quizOptions, correctAnswer) => {
    if (quizOptions === correctAnswer) {
      console.log('right')
    }
    else {
      console.log('wrong')
    }
  }
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
