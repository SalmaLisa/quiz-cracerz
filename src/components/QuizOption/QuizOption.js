import React from "react";

const QuizOption = ({ quizOptions, question }) => {
  console.log(quizOptions);
  return (
    <div className="flex">
      <input 
        type="radio"
        id="quizOptions"
        name={question}
        value="quizOptions"
      />
      <label className="text-xl font-normal ml-3" for="quizOptions">{quizOptions}</label>
      <br />
    </div>
  );
};

export default QuizOption;
