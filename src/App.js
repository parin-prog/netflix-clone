import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Homescreen from './components/Homescreen';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homescreen />
    },
    {
      path: '/login',
      element: <LoginScreen />
    },
    {
      path: '/signup',
      element: <SignupScreen />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
