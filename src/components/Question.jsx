import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function Question(props) {
  const { question, answer } = props;
  return (
    <Card
      style={{
        backgroundColor: "#2b2727",
        color: "white",
        padding: "0px 40px 0px 40px",

        marginBottom: "30px",
        width: "80vw",

        border: "0px",
      }}
    >
      <p>{question || "Loading..."}</p>

      <Container
        style={{
          marginTop: "30px",
          width: "50%",
          fontSize: "35px",

          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          variant="success"
          onClick={() => answer("True")}
          style={{
            fontSize: "25px",
            width: "100px",
          }}
        >
          True
        </Button>
        <Button
          variant="danger"
          onClick={() => answer("False")}
          style={{
            fontSize: "25px",
            width: "100px",
          }}
        >
          False
        </Button>
      </Container>
    </Card>
  );
}
