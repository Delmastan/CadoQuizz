/* eslint-disable*/
import React, { useState, useEffect } from "react";
import { useOptions } from "../../contexts/PlayerContext";
import "./ShowQuestion.scss";

const fetchData = async (limit, category, difficulty) => {
  const response = await fetch(
    `https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=${limit}&category=${category}&difficulty=${difficulty}`
  );
  const jsonData = await response.json();
  return jsonData;
};

function Timer({ isClose, resetTimer, reset }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isClose) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      resetTimer();
    };
  }, [isClose, resetTimer, reset]);

  useEffect(() => {
    if (reset) {
      setSeconds(0);
    }
  }, [reset]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const formatseconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      formatseconds
    ).padStart(2, "0")}`;
  };

  return <p>{formatTime(seconds)}</p>;
}

function ShowQuestion() {
  const { players, category, limit, difficulty } = useOptions();
  const [isActive, setIsActive] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const [index, setIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [quizData, setQuizData] = useState(null);
  console.log(players);
  const randomDataAnswer = (badAnswer, Answer) => {
    const mixerAnswer = [...badAnswer, Answer];
    const shuffledAnswer = mixerAnswer.sort(() => Math.random() - 0.5);
    return shuffledAnswer;
  };

  const handleClick = (e) => {
    const userAnswer = e.target.id;

    if (userAnswer === quizData.quizzes[index].answer) {
      console.info("Bonne réponse");
    }

    if (index < players.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setIsClose(true);
      setResetTimer(true);
    }
  };

  const resetTimerCallback = () => {
    setResetTimer(false);
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      const result = await fetchData(limit, category, difficulty);
      setQuizData(result);
    };

    if (players.length > 0) {
      fetchQuizData();
    }
  }, [players, category, limit, difficulty]);

  return (
    <div className="ShoWQ-contain">
      <div
        className="ShowQ-modal"
        style={{ display: isClose ? "flex" : "none" }}
      >
        {isActive && (
          <>
            <h1 className="ShowQ-title-user">{players[index]}</h1>
            <button
              className="ShowQ-button-start"
              type="button"
              onClick={() => {
                setIsClose(false);
                resetTimerCallback();
              }}
            >
              Commencer
            </button>
          </>
        )}
      </div>
      <article
        className="ShowQ-section-question"
        style={{ display: isActive && !isClose ? "flex" : "none" }}
      >
        {isActive && (
          <Timer
            isClose={!isClose}
            resetTimer={resetTimerCallback}
            reset={resetTimer}
          />
        )}
        <h2>{quizData && quizData.quizzes[index].question}</h2>
        {quizData &&
          randomDataAnswer(
            quizData.quizzes[index].badAnswers,
            quizData.quizzes[index].answer
          ).map((answer) => (
            <button
              key={answer}
              id={answer}
              type="button"
              className="ShoQ-button-answer"
              onClick={(e) => handleClick(e)}
            >
              {answer}
            </button>
          ))}
      </article>
    </div>
  );
}

export default ShowQuestion;
