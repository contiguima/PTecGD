import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Formulario from './pages/Formulario';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element = {<Formulario/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
