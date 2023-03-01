import { useState } from "react";
import { Question } from "./Question";
import { RestartQuiz } from "./RestartQuiz";
import { useFetch } from "../utils/hooks/useFetch";
import { Container, ProgressBar } from "react-bootstrap";
import styles from "./Quiz.module.css";

export function Quiz() {
  // Setting the initial value of the question number and points to 0.
  const [questionNumber, setQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);

  // Using the API response to set the questions for the quiz.
  const [questions, reFetchQuestions] = useFetch(
    "https://opentdb.com/api.php?amount=10&category=22&type=boolean"
  );

  // console.log("questionsnumber", questionNumber, questions);


// Checking the if the question's answer if true of false.
  function handleAnswers(answer) {
    if (answer === questions[questionNumber].correct_answer) {
      setPoints(points + 1);
    }

    setQuestionNumber(questionNumber + 1);
  }

  // Reseting the form after answering all the questions.
  function handleReset() {
    reFetchQuestions(
      "https://opentdb.com/api.php?amount=10&category=22&type=boolean"
    );
    setQuestionNumber(0);
    setPoints(0);
  }

  return (
    <div>
      <Container className={styles.Container}>
        {questionNumber < 10 ? (
          <div className={styles.Question}>
            <h1 className={styles.h1}>Test your knowledge!</h1>
            <p>
              Question: {questionNumber + 1} out of {questions.length}
            </p>

            <ProgressBar
              className={styles.ProgressBar}
              striped
              variant="success"
              animated
              now={((questionNumber + 1) / questions.length) * 100}
              label={`${((questionNumber + 1) / questions.length) * 100}%`}
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
