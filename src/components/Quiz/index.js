import React, { useState } from 'react';
import styles from './styles.module.css'; 

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState(new Set()); 
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
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
        {incorrectQuestions.has(index) ? (<strong>#! _Errore</strong>) : null}
      </div>
    ))}
    <button
      className={styles.submitButton}
      onClick={handleSubmit}
      disabled={allQuestionsAnswered ? false : true}
    >
      Verifica
    </button>

    {submitted && ( // Mostra il messaggio solo dopo aver premuto il pulsante di submit
        allQuestionsAnswered && incorrectQuestions.size === 0 ? (
          <p className={`${styles.cardSuccess}`}>Bravo nerd, non hai fatto errori, avanti così! 💪</p>
        ) : (
          <p className={`${styles.cardWrong}`}>
            ❌ Mhhh, sembra ci sia un problema... le risposte corrette sono <span>{score} su {questions.length}</span>, prova a controllare bene
          </p>
        )
      )}
    
  </div>
  );
};

export default Quiz;
