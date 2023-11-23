/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./ShowQuestion.scss";

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
  }, [isClose, resetTimer, reset]); // Ajouter reset comme dépendance

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
  const participants = [
    "Marcelo",
    "Quentin",
    "Tristan",
    "Théo",
    "Adrien",
    "Khachik",
  ];

  const data = useLoaderData();
  const [isActive, setIsActive] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const [index, setIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false); // Nouvel état resetTimer

  const randomDataAnswer = (badAnswer, Answer) => {
    const mixerAnswer = [...badAnswer, Answer];
    const shuffledAnswer = mixerAnswer.sort(() => Math.random() - 0.5);
    return shuffledAnswer;
  };

  const handleClick = (e) => {
    const userAnswer = e.target.id;

    if (userAnswer === data.quizzes[index].answer) {
      console.info("Bonne réponse");
    }

    if (index < participants.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setIsClose(true);
      setResetTimer(true); // Activer la réinitialisation du timer
    }
  };

  const resetTimerCallback = () => {
    setResetTimer(false); // Désactiver la réinitialisation du timer
  };

  return (
    <div className="ShoWQ-contain">
      <div
        className="ShowQ-modal"
        style={{ display: isClose ? "flex" : "none" }}
      >
        {isActive && (
          <>
            <h1 className="ShowQ-title-user">{participants[index]}</h1>
            <button
              className="ShowQ-button-start"
              type="button"
              onClick={() => {
                setIsClose(false);
                resetTimerCallback(); // Utiliser le callback pour désactiver la réinitialisation du timer
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
        <h2>{data.quizzes[index].question}</h2>
        {data.quizzes.length &&
          randomDataAnswer(
            data.quizzes[index].badAnswers,
            data.quizzes[index].answer
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
