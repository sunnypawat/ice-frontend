import { useState } from 'react';
import './CourseQuiz.css'

const Quiz = (title, subtitle, answersArray) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswerClick = (answer) => {
    if (!answered) {
      if (answer.isCorrect) {
        setIsCorrect(true);
      }
      setSelectedAnswer(answer.id);
      setAnswered(true);
    }
  };

  const answers = [
    { id: 1, text: 'Option A', isCorrect: false },
    { id: 2, text: 'Option B', isCorrect: false },
    { id: 3, text: 'Option C', isCorrect: false },
    { id: 4, text: 'Option D', isCorrect: true },
  ];

  return (
    <div className='courseQuizBanner'>
      <h1 className='courseQuizTitle'>Quiz</h1>
      <p className='courseQuizeSubtitle'>Select the correct answer:</p>
      <div className='answerContainer'>
        {answers.map((answer) => (
            <button className='courseQuizButton'
            key={answer.id}
            onClick={() => handleAnswerClick(answer)}
            style={{
                backgroundColor:
                selectedAnswer === answer.id
                    ? isCorrect
                    ? 'green'
                    : 'red'
                    : 'white',
                pointerEvents: answered ? 'none' : 'auto',
            }}
            >
            {answer.text}
            </button>
        
        ))}
      </div>
      {answered && (
        <p>
          {isCorrect
            ? 'You chose the correct answer!'
            : `The correct answer is: ${
                answers.find((answer) => answer.isCorrect).text
              }`}
        </p>
      )}
    </div>
  );
};

export default Quiz;