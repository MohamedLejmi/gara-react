import './App.css';
import MainContent from "./components/main-content/MainContent";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <MainContent/>
      </BrowserRouter>
  );
}

export default App;
