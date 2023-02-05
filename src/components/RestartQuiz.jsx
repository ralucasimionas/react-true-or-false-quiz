import { Button, Card } from "react-bootstrap";
import styles from "./RestartQuiz.module.css";

export function RestartQuiz(props) {
  const { points, reset } = props;
  return (
    <Card className={styles.Card}>
      <p>Congratulations! </p>
      <p>You scored{"   "}</p>
      <p className={styles.Score}>{(points * 100) / 10}%</p>

      <Button className={styles.Button} variant="light" onClick={() => reset()}>
        Would you like to try again?
      </Button>
    </Card>
  );
}
