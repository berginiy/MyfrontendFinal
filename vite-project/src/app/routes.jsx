// import {createBrowserRouter} from 'react-router-dom';
// import {HomePage} from '../pages/HomePage';
// import {RegisterPage} from '../pages/RegisterPage';
// import {LogInPage} from '../pages/LogInPage';
// import {LogOutPage} from '../pages/LogOutPage';
// import {MainOurUserPage} from '../pages/MainOurUserPage';
// import {MainNewUserPage} from '../pages/MainNewUserPage';
// import {GamePage} from '../pages/GamePage';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainNewUserPage />
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />
//   },
//   {
//     path: '/login',
//     element: <LogInPage />
//   },
//   {
//     path: '/logout',
//     element: <LogOutPage />
//   },
//   {
//     path: '/authuser',
//     element: <MainOurUserPage />
//   },
//   {
//     path: '/home',
//     element: <HomePage />
//   },
//   {
//     path: '/game',
//     element: <GamePage />
//   }
// ])

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import LogOutPage from './pages/LogOutPage';
import MainOurUserPage from './pages/MainOurUserPage';
import MainNewUserPage from './pages/MainNewUserPage';
import GamePage from './pages/GamePage';

export const router = [
  {
    path: '/',
    component: MainNewUserPage,
    exact: true,
  },
  {
    path: '/register',
    component: RegisterPage,
    exact: true,
  },
  {
    path: '/login',
    component: LogInPage,
    exact: true,
  },
  {
    path: '/logout',
    component: LogOutPage,
    exact: true,
  },
  {
    path: '/authuser',
    component: MainOurUserPage,
    exact: true,
  },
  {
    path: '/home',
    component: HomePage,
    exact: true,
  },
  {
    path: '/game',
    component: GamePage,
    exact: true,
  },
]
