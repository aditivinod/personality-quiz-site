import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './pages/ResultPage/Result';
import StartScreen from './pages/StartScreen/StartScreen';
import TestQuestion from './pages/TestQuestion/TestQuestion';

function App() {
  console.log("Rendering App.")
  return (
    <Router>
      <div className="Organ Quiz">
        <header className="App-Header">
          {
            <p>Replace with starting screen later</p>
          }
        </header>
        <Routes>
          <Route path="/" element={<StartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
