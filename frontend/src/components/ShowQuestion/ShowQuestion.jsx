import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./ShowQuestion.scss";

function ShowQuestion() {
  const participants = [
    "marcelo",
    "quentin",
    "tristan",
    "théo",
    "adrien",
    "khachik",
  ];

  const data = useLoaderData();
  //   const [userPoint, setUserPoint] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isClose, setIsClose] = useState(false);
  const [index, setIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

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
  }, [index]); // Le tableau vide signifie que cela ne doit s'exécuter qu'une fois après le montage du composant
  // useEffect(()=>(
  // setIsActive(!isActive);
  // ),[index])

  const handleClick = (e) => {
    const userAnswer = e.target.id;

    if (userAnswer === data.quizzes[index].answer) {
      console.info("bonne reponse");
    }
    if (index < data.quizzes.length - 1) {
      setIndex((previndex) => previndex + 1);
      setIsClose(!isClose);
    }
    setIsActive(isActive);
    // setIsActive(false);
  };
  const CloseModale = () => {
    setIsClose(!isClose);
  };
  return (
    <div className="ShoWQ-contain">
      <div
        className="ShowQ-modal"
        style={{ display: isClose ? "none" : "block" }}
      >
        <h1 className="ShowQ-title-user">{participants[index]}</h1>
        <button
          type="button"
          className="ShowQ-button-start"
          onClick={CloseModale}
        >
          Commencer
        </button>
      </div>
      <h2>{data.quizzes[index].question}</h2>
      <article>
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
