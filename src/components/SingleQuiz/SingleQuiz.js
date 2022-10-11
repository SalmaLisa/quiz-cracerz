import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import { EyeIcon } from "@heroicons/react/24/solid";

const SingleQuiz = ({ singleQuiz }) => {
  const { id, question, options, correctAnswer } = singleQuiz;
  const splitQuestion = question.split(">");
  const secondSplit = splitQuestion[1].split("<");
  const newQuestion = secondSplit[0];

  console.log(options);
  return (
    <li className="list-decimal border border-blue-200 mt-8 w-3/5 mx-auto p-5 rounded relative text-2xl text-slate-900 font-semibold "> {newQuestion}
      <div className="cursor-pointer absolute right-0 top-0">
        <EyeIcon className="h-6 w-6 text-blue-500 mt-2 mr-3" />
      </div>
      <div className="mt-3 ml-3">
        {options.map((option) => (
          <QuizOption
            quizOptions={option}
            key={option.idx}
            question={question}
          />
        ))}
      </div>
    </li>
  );
};

export default SingleQuiz;
