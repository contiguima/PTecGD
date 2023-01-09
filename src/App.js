import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Formulario from './pages/Formulario';
import Respuestas from './pages/Respuestas';
// Condicion al respuestas para que los datos esten en las props y sino, tire error y te redirija  al formulario
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element = {<Formulario/>}/>
          <Route path="/respuestas" element = {<Respuestas datos ={null}/>}/>
    

        </Routes>
      </Router>
    </div>
  );
}

export default App;
