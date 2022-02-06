import "./App.css";
import Home from "./Home";
import FormComponent from "./Form";
import Heading from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Heading />
      <FormComponent />
      <Home />
      <Footer  style={{margin:"0px"}}/>
    </div>
  );
}

export default App;
