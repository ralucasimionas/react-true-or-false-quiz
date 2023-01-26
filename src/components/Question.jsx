import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function Question(props) {
  const { question, answer } = props;
  return (
    <Card
      style={{
        backgroundColor: "#2b2727",
        color: "white",
        textAlign: "center",
        fontSize: "35px",
        fontFamily: "Cormorant Garamond",
        paddingTop: "50px",
        paddingBottom: "50px",
        marginTop: "30px",
        marginBottom: "30px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>{question || "Loading..."}</p>

      <div
        className="answerButtons"
        styles={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="success"
          onClick={() => answer("True")}
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "20px",
            marginRight: "20px",
            width: "100px",
          }}
        >
          True
        </Button>
        <Button
          variant="danger"
          onClick={() => answer("False")}
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "20px",
            marginLeft: "20px",
            width: "100px",
          }}
        >
          False
        </Button>
      </div>
    </Card>
  );
}
