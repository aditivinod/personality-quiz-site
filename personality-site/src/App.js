import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreen/StartScreen';
import TestQuestion from './pages/TestQuestion/TestQuestion';

function App() {
  console.log('Rendering App.')
  return(
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/test-question" element={<TestQuestion />} />
      </Routes>
    </Router>
  );
}
export default App;
