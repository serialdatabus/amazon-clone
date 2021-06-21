import "../../styles/App.css";
import BodyContent from "../BodyContent/BodyContent";
import Header from "../Header/Header";
import "../../styles/BodyContent.css";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;
