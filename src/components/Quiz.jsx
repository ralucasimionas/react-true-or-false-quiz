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
          width: "70vw",
          marginTop: "50px",
          marginBottom: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "black",
          color: "white",
          fontSize: "40px",
          fontFamily: "Cormorant Garamond",
          textAlign: "center",
        }}
      >
        {questionNumber < 10 ? (
          <div className="quiz">
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
              now={(points / questions.length) * 100}
              label={`${(points / questions.length) * 100}%`}
              style={{ height: "25px", fontSize: "25px" }}
            ></ProgressBar>

            {/* {questions.map((questions) => {
              return (
                <Question
                  question={questions[questionNumber].question}
                  answer={handleAnswers}
                ></Question> 
                  ); })}*/}
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
