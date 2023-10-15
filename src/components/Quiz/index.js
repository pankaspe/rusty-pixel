import React, { useState } from 'react';
import styles from './styles.module.css'; 

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState(new Set()); // Set per tenere traccia delle domande errate

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);
  };

  const allQuestionsAnswered = userAnswers.every(answer => answer !== null);

const handleSubmit = () => {
    // Calcola il punteggio dell'utente e identifica le risposte sbagliate
    const newIncorrectQuestions = new Set();
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer !== questions[index].correctAnswer) {
        newIncorrectQuestions.add(index);
      }
    });

    setIncorrectQuestions(newIncorrectQuestions);
    
    // Calcola il punteggio
    const newScore = questions.length - newIncorrectQuestions.size;
    setScore(newScore);
  };

  return (
    <div>
    {questions.map((question, index) => (
      <div key={index}  style={{ marginBottom: 40}} className={incorrectQuestions.has(index) ? styles.wrongQuestion : ''}>
        <h3>{question.text}</h3>
        <ul>
          {question.answers.map((answer, answerIndex) => (
            <li key={answerIndex}>
              <input
                type="radio"
                id={`q${index}-a${answerIndex}`}
                name={`q${index}`}
                onChange={() => handleAnswerSelect(index, answer)}
              />
              <label htmlFor={`q${index}-a${answerIndex}`}>{answer}</label>
            </li>
          ))}
        </ul>
      </div>
    ))}
    <button
      className={styles.submitButton}
      onClick={handleSubmit}
      disabled={allQuestionsAnswered ? false : true}
    >
      Verifica
    </button>

    <p className={styles.score}>Numero di risposte corrette: [<span>{score}</span>]</p>
  </div>
  );
};

export default Quiz;
