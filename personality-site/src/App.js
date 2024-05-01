import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreen/StartScreen';
import TestQuestion from './pages/TestQuestion/TestQuestion';
import QuestionPage from './pages/TestQuestion/QuestionPage'
import questions from './pages/TestQuestion/Questions'; // Import questions data
import Result from './pages/ResultPage/Result';

function App() {
  console.log('Rendering App.')
  return(
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/test-question" element={<QuestionPage questions={questions} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}
export default App;
