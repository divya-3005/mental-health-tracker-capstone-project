import React, { useState, useEffect } from 'react';
import './Mood.css';

const MULTIPLE_CHOICE = [
  {
    q: 'How often do you feel happy during the day?',
    options: ['Rarely', 'Sometimes', 'Often', 'Almost always'],
  },
  {
    q: 'How well did you sleep last night?',
    options: ['Very poorly', 'Poorly', 'Well', 'Very well'],
  },
  {
    q: 'How social did you feel today?',
    options: ['Not at all', 'A little', 'Somewhat', 'Very social'],
  },
  {
    q: 'How productive did you feel today?',
    options: ['Not at all', 'A little', 'Somewhat', 'Very productive'],
  },
  {
    q: 'How much did you enjoy your meals today?',
    options: ['Not at all', 'A little', 'Somewhat', 'A lot'],
  },
];

const RATING_QUESTIONS = [
  'How stressed did you feel today?',
  'How anxious did you feel today?',
  'How calm did you feel today?',
  'How motivated did you feel today?',
  'How tired did you feel today?',
  'How grateful did you feel today?',
  'How focused did you feel today?',
  'How relaxed did you feel today?',
  'How supported did you feel today?',
  'How optimistic did you feel today?',
];

function getTodayKey() {
  const d = new Date();
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getInitialMoodData() {
  const saved = localStorage.getItem('moodData');
  if (saved) return JSON.parse(saved);
  // Default: 7 days, all 3 (neutral)
  return Array(7).fill(3);
}

function Mood() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [moodData, setMoodData] = useState(getInitialMoodData());
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  // Save moodData to localStorage
  useEffect(() => {
    localStorage.setItem('moodData', JSON.stringify(moodData));
  }, [moodData]);

  // On quiz submit, update moodData for today
  function handleQuizSubmit() {
    // Calculate mood score: average all answers (scale 1-4 for MC, 1-5 for rating)
    let total = 0;
    let count = 0;
    answers.forEach((a, i) => {
      if (i < 5) total += a + 1;
      else total += a + 1;
      count++;
    });
    const avg = Math.round(total / count);
    const today = new Date().getDay();
    const newMoodData = [...moodData];
    newMoodData[today === 0 ? 6 : today - 1] = avg;
    setMoodData(newMoodData);
    setQuizDone(true);
    setTimeout(() => {
      setShowQuiz(false);
      setQuizStep(0);
      setAnswers([]);
      setQuizDone(false);
    }, 1500);
  }

  function handleAnswer(ans) {
    setAnswers([...answers, ans]);
    setQuizStep(quizStep + 1);
  }
  function handleCloseQuiz() {
    setShowQuiz(false);
    setQuizStep(0);
    setAnswers([]);
    setQuizDone(false);
  }

  return (
    <>
      <div className="mood-hero">
        <div className="mood-hero-content">
          <h1>MOOD TRACKER</h1>
        </div>
      </div>
      <div className="mood-box">
        <button className="mood-quiz-btn" onClick={() => setShowQuiz(true)}>
          Take Mental Health Quiz
        </button>
        {showQuiz && (
          <div className="mood-quiz-modal">
            <div className="mood-quiz-content">
              {!quizDone ? (
                <>
                  <h2>Mental Health Quiz</h2>
                  {quizStep < 5 ? (
                    <>
                      <p className="mood-quiz-q">{MULTIPLE_CHOICE[quizStep].q}</p>
                      <div className="mood-quiz-options">
                        {MULTIPLE_CHOICE[quizStep].options.map((opt, i) => (
                          <button key={i} className="mood-quiz-option" onClick={() => handleAnswer(i)}>{opt}</button>
                        ))}
                      </div>
                    </>
                  ) : quizStep < 15 ? (
                    <>
                      <p className="mood-quiz-q">{RATING_QUESTIONS[quizStep - 5]}</p>
                      <div className="mood-quiz-options">
                        {[1,2,3,4,5].map((n) => (
                          <button key={n} className="mood-quiz-option" onClick={() => handleAnswer(n-1)}>{n}</button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <button className="mood-quiz-submit" onClick={handleQuizSubmit}>Submit Quiz</button>
                  )}
                  <button onClick={handleCloseQuiz} className="mood-quiz-back mood-quiz-back-bottom">Back</button>
                </>
              ) : (
                <div className="mood-quiz-done">Thank you! Your mood has been updated.</div>
              )}
            </div>
          </div>
        )}
        <div className="mood-graph-section">
          <h3>Daily Mood Trends</h3>
          <svg className="mood-line-graph" width="100%" height="180" viewBox="0 0 300 180">
            <polyline
              fill="none"
              stroke="#2e7d32"
              strokeWidth="3"
              points={moodData.map((v, i) => `${i * 50 + 20},${180 - v * 30}`).join(' ')}
            />
            {moodData.map((v, i) => (
              <circle key={i} cx={i * 50 + 20} cy={180 - v * 30} r="5" fill="#2e7d32" />
            ))}
          </svg>
          <div className="mood-graph-labels">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mood; 
