import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./ShowQuestion.scss";

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
  const [isClose, setIsClose] = useState(false);
  const [index, setIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const formatseconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      formatseconds
    ).padStart(2, "0")}`;
  };

  const randomDataAnswer = (badAnswer, Answer) => {
    const mixerAnswer = [...badAnswer, Answer];
    const shuffledAnswer = mixerAnswer.sort(() => Math.random() - 0.5);
    return shuffledAnswer;
  };
  useEffect(() => {
    const mixedAnswers = randomDataAnswer(
      data.quizzes[index].badAnswers,
      data.quizzes[index].answer
    );
    setShuffledAnswers(mixedAnswers);
  }, [index]);

  const handleClick = (e) => {
    const userAnswer = e.target.id;

    if (userAnswer === data.quizzes[index].answer) {
      console.info("Bonne réponse");
    }

    if (index < data.quizzes.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setIsClose(!isClose);
    }

    setIsActive(true);
  };

  const CloseModale = () => {
    setIsClose(!isClose);
  };

  return (
    <div className="ShoWQ-contain">
      <div
        className="ShowQ-modal"
        style={{ display: isClose ? "none" : "flex" }}
      >
        <h1 className="ShowQ-title-user">{participants[index]}</h1>
        <button
          className="ShowQ-button-start"
          type="button"
          onClick={CloseModale}
        >
          Commencer
        </button>
      </div>
      <article
        className="ShowQ-section-question"
        style={{ display: isClose ? "flex" : "none" }}
      >
        {isClose && <p>{formatTime(seconds)}</p>}
        <h2>{data.quizzes[index].question}</h2>
        {data.quizzes.length &&
          shuffledAnswers.map((answer) => (
            <button
              key={answer}
              id={answer}
              type="button"
              className="ShoQ-button-answer"
              disabled={!isActive}
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
