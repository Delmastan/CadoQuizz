/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useOptions } from "../../contexts/PlayerContext";
import { useNavigate } from "react-router-dom";

import "./ShowQuestion.scss";

// Fonction pour récupérer les données du quiz depuis l'API
const fetchData = async (limit, category, difficulty) => {
  const response = await fetch(
    `https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=10&category=${category}`
  );
  const jsonData = await response.json();
  return jsonData;
};

// Fonction pour mélanger les réponses
const randomDataAnswer = (badAnswer, Answer) => {
  const mixerAnswer = [...badAnswer, Answer];
  const shuffledAnswer = mixerAnswer.sort(() => Math.random() - 0.5);
  return shuffledAnswer;
};

// Composant Timer qui gère la minuterie
function Timer({ isClose, resetTimer, reset, onTimeChange }) {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isClose && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
        onTimeChange(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
      resetTimer();
    };
  }, [isClose, resetTimer, reset, seconds, onTimeChange]);

  useEffect(() => {
    if (reset) {
      setSeconds(30);
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

// Composant principal ShowQuestion
function ShowQuestion() {
  const navigate = useNavigate();
  const { players, category, limit, difficulty, cycle, numberCycle } =
    useOptions();
  const [isActive, setIsActive] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const [index, setIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(30);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Effet pour récupérer les données du quiz lorsqu'il y a des participants
  useEffect(() => {
    const fetchQuizData = async () => {
      const result = await fetchData(limit, category, difficulty);
      setQuizData(result);
      // Mélanger les réponses une seule fois lors de l'initialisation
      setShuffledAnswers(
        randomDataAnswer(
          result.quizzes[index].badAnswers,
          result.quizzes[index].answer
        )
      );
    };

    if (players.length > 0) {
      fetchQuizData();
    }
  }, [players, category, limit, difficulty, index]);

  // Fonction pour attribuer des points en fonction du temps écoulé
  const calculatePoints = () => {
    const maxPoints = 100;
    const timeLimit = 30;

    const elapsedTimeRatio = elapsedTime / timeLimit;

    const points = Math.max(0, Math.round(elapsedTimeRatio * maxPoints));

    return points;
  };

  // Fonction pour gérer le clic sur une réponse
  const handleClick = (e) => {
    const userAnswer = e.target.id;

    if (cycle !== numberCycle) {
      if (userAnswer === quizData.quizzes[index].answer) {
        players[index].points += calculatePoints();
        console.log(players[index].points);
        console.info("Bonne réponse");
      } else {
        console.log(players[index].points);
      }

      if (index < players.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
        setIsClose(true);
        setResetTimer(true);
        setShuffledAnswers(
          randomDataAnswer(
            quizData.quizzes[index + 1].badAnswers,
            quizData.quizzes[index + 1].answer
          )
        );
      } else {
        navigate("/classement");
      }
    } else {
      if (userAnswer === quizData.quizzes[index].answer) {
        players[index].points += calculatePoints();
        console.log(players[index].points);
        console.info("Bonne réponse");
      } else {
        console.log(players[index].points);
      }

      if (index < players.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
        setIsClose(true);
        setResetTimer(true);
        setShuffledAnswers(
          randomDataAnswer(
            quizData.quizzes[index + 1].badAnswers,
            quizData.quizzes[index + 1].answer
          )
        );
      } else {
        navigate("/resultat");
      }
    }
  };

  // Fonction de rappel pour réinitialiser la minuterie
  const resetTimerCallback = () => {
    setResetTimer(false);
  };

  return (
    <div className="ShoWQ-contain">
      <div
        className="ShowQ-modal"
        style={{ display: isClose ? "flex" : "none" }}
      >
        {isActive && (
          <>
            <h1 className="ShowQ-title-user">{players[index].name}</h1>
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
            onTimeChange={setElapsedTime}
          />
        )}
        <h2>{quizData && quizData.quizzes[index].question}</h2>
        {shuffledAnswers.map((answer) => (
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
