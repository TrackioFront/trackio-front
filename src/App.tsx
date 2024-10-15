import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LoginFunctions} from './modules/Login/infrastructure/components/LoginFunctions';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/login" element={<LoginFunctions />} />
        </Routes>
    </Router>
  );
}

export default App;
