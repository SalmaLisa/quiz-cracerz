import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizPage = () => {
  const quizzes = useLoaderData();
  const quiz = quizzes.data.questions;
  return (
    <div>
      {
        quiz.map(singleQuiz => <SingleQuiz
          singleQuiz={singleQuiz}
          key={singleQuiz.id}
        />)
      }
    </div>
  );
};

export default QuizPage;