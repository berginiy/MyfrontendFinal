import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import LogOutPage from './pages/LogOutPage';
import MainOurUserPage from './pages/MainOurUserPage';
import MainNewUserPage from './pages/MainNewUserPage';
import GamePage from './pages/GamePage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNewUserPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="/logout" element={<LogOutPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path="/authuser" element={<MainOurUserPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/game" element={<GamePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
