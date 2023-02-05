import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styles from "./Question.module.css";

export function Question(props) {
  const { question, answer } = props;
  return (
    <Card className={styles.Card}>
      <p className={styles.p}>{question || "Loading..."}</p>

      <Container className={styles.Container}>
        <Button
          className={styles.Button}
          variant="success"
          onClick={() => answer("True")}
        >
          True
        </Button>
        <Button
          className={styles.Button}
          variant="danger"
          onClick={() => answer("False")}
        >
          False
        </Button>
      </Container>
    </Card>
  );
}
