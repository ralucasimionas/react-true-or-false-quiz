import { Quiz } from "./components/Quiz";
import styles from "./App.css";

function App() {
  return (
    <div
      className="bla"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Quiz />
    </div>
  );
}

export default App;
