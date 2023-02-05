import { useState } from "react";
import { Question } from "./Question";
import { RestartQuiz } from "./RestartQuiz";
import { useFetch } from "../utils/hooks/useFetch";
import { Container, ProgressBar } from "react-bootstrap";

export function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const questions = useFetch(
    "https://opentdb.com/api.php?amount=10&category=22&type=boolean"
  );

  console.log("questions", questions);

  function handleAnswers(answer) {
    if (answer === questions[questionNumber].correct_answer) {
      setPoints(points + 1);
    }

    setQuestionNumber(questionNumber + 1);
  }

  function handleReset() {
    setQuestionNumber(0);
    setPoints(0);
  }

  return (
    <div>
      <Container
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          paddingTop: "20px",
          paddingBottom: "20px",

          backgroundColor: "black",
          color: "white",
          fontSize: "40px",
          fontFamily: "Cormorant Garamond",

          textAlign: "center",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {questionNumber < 10 ? (
          <div
            style={{
              backgroundColor: "#2b2727",
              color: "white",
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "Cormorant Garamond",
              paddingTop: "50px",
              paddingBottom: "50px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <h1 style={{ color: "yellow", fontSize: "50px" }}>
              Test your knowledge!
            </h1>

            <p>
              Question: {questionNumber + 1} out of {questions.length}
            </p>

            <ProgressBar
              striped
              variant="success"
              animated
              now={((questionNumber + 1) / questions.length) * 100}
              label={`${((questionNumber + 1) / questions.length) * 100}%`}
              style={{
                height: "25px",
                fontSize: "25px",
                marginTop: "30px",
                marginBottom: "0px",
              }}
            ></ProgressBar>

            <Question
              {...questions[questionNumber]}
              answer={handleAnswers}
            ></Question>

            <p>So far, your score is {points} points.</p>
          </div>
        ) : (
          <RestartQuiz points={points} reset={handleReset} />
        )}
      </Container>
    </div>
  );
}
