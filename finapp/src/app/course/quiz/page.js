"use client"
import React, { useState } from 'react';
import './Page.css';

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const quizData = {
    quizQuestion: "Which one is a trading strategy?",
    quizImage: "http://example.com/images/mars.jpg", // This will be the quiz-related image if needed.
    quizAnswerList: ["a. trading a stock all day", "b. trading a stock all day", "c. trading a stock all day"],
    quizCorrectAnswer: "c. trading a stock all day",
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleConfirmClick = () => {
    setIsCorrect(selectedAnswer === quizData.quizCorrectAnswer);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Time: shorterm trading</h1>
        <div className="quiz-level">Level: Basic 2</div>
        <div className="life">❤️ 5</div>
      </div>
      <div className="quiz-question">
        <h2>{quizData.quizQuestion}</h2>
        <div className="quiz-answers">
          {quizData.quizAnswerList.map((answer, index) => (
            <button
              key={index}
              className={`answer-btn ${selectedAnswer === answer ? 'selected' : ''}`}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
        <button className="confirm-btn" onClick={handleConfirmClick}>
          Confirm
        </button>
        {isCorrect !== null && (
          <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
          </div>
        )}
      </div>
      <div className="quiz-footer">
        <button className="footer-btn">Previous</button>
        <button className="footer-btn">Next</button>
      </div>
    </div>
  );
};

export default QuizPage;
