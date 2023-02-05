import { Button, Card } from "react-bootstrap";

export function RestartQuiz(props) {
  const { points, reset } = props;
  return (
    <Card
      style={{
        backgroundColor: "#2b2727",
        color: "white",
        textAlign: "center",
        fontSize: "50px",
        fontFamily: "Cormorant Garamond",
        paddingTop: "50px",
        paddingBottom: "50px",
        marginTop: "30px",
        marginBottom: "30px",
        width: "50vw",
        alignItems: "center",
      }}
    >
      <p>Congratulations! </p>
      <p>You scored{"   "}</p>
      <p
        style={{
          margin: 0,
          color: "#25be9b",
          fontSize: "150px",
          textShadow: "0px  0px  25px  #25be9b",
        }}
      >
        {(points * 100) / 10}%
      </p>

      <Button
        variant="light"
        onClick={() => reset()}
        style={{
          fontSize: "30px",
          marginTop: "30px",
          marginBottom: "15px",
          width: "400px",
        }}
      >
        Would you like to try again?
      </Button>
    </Card>
  );
}
