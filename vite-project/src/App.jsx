import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import LogOutPage from './pages/LogOutPage';
import MainOurUserPage from './pages/MainOurUserPage';
import MainNewUserPage from './pages/MainNewUserPage';
import GamePage from './pages/GamePage';
import {useState, createContext} from 'react';

export const UserContext = createContext()

const App = () => {
  const [user, setUser] = useState(false)

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNewUserPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/logout" element={<LogOutPage/>}/>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path="/authuser" element={<MainOurUserPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path="/game" element={<GamePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
