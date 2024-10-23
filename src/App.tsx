import React from 'react';
import './App.css';
import Alert from './components/Alerts/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LoginFunctions} from './modules/Login/infrastructure/components/LoginFunctions';
import { PassRecoveryFunctions } from './modules/PassRecovery/infrastructure/components/PassRecoveryFunctions';
import { ResetPassWord } from './modules/PassRecovery/infrastructure/components/ResetPassword';
import './i18n';


function App() {
  return (
    <Router>
      <Alert />
        <Routes>
        <Route path="/login" element={<LoginFunctions />} />
        <Route path="/resetPassword" element={<PassRecoveryFunctions />} />
        <Route path="/auth/reset-password" element={<ResetPassWord />} />
        </Routes>
    </Router>
  );
}

export default App;
