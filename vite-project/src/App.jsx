import React, { useState, createContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import LogOutPage from './pages/LogOutPage';
import MainNewUserPage from './pages/MainNewUserPage';
import GamePage from './pages/GamePage';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(true);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNewUserPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/logout" element={<LogOutPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
