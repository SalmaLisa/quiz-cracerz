import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizPage = () => {
  const quizzes = useLoaderData();
  const quiz = quizzes.data.questions;
  return (
    <div className='quiz-page grid grid-cols-3 w-4/5 mx-auto'>
       <div className='col-span-2'>
      {
        quiz.map(singleQuiz => <SingleQuiz
          singleQuiz={singleQuiz}
          key={singleQuiz.id}
        />)
      }
      </div>
      <div>

      </div>
   </div>
  );
};

export default QuizPage;