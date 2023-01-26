import { Button, Container } from "react-bootstrap";

export function RestartQuiz(props) {
  const { points, reset } = props;
  return (
    <Container
      style={{
        width: "60vw",
        marginTop: "20px",
        marginBottom: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "black",
        color: "white",
        fontSize: "40px",
        fontFamily: "Cormorant Garamond",
        textAlign: "center",
      }}
    >
      <h1>Congratulations! </h1>
      <p>You scored</p>
      <p
        style={{
          color: "#25be9b",
          fontSize: "100px",
        }}
      >
        {(points * 100) / 10}%
      </p>

      <Button
        variant="light"
        onClick={() => reset()}
        style={{ fontSize: "30 px" }}
      >
        Would you like to try again?
      </Button>
    </Container>
  );
}
