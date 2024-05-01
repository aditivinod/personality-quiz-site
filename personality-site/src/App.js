import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreen/StartScreen';

function App() {
  console.log('Rendering App.')
  return(
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
      </Routes>
    </Router>
  );
}
export default App;
