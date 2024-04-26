import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form skills={["JS", "CSS", "HTML", "Python", "C++", "JAVA"]} />
    </div>
  );
}

export default App;
