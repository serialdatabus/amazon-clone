import "../../styles/App.css";
import BodyContent from "../BodyContent/BodyContent";
import Header from "../Header/Header";
import "../../styles/BodyContent.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyContent />
    </div>
  );
}

export default App;
