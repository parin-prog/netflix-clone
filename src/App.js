import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './components/Homescreen';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/user/userSlice';
import ProfileScreen from './components/ProfileScreen';
import LoginScreen from './components/LoginScreen'

function App() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user) {
        // Logged in
        // const uid = user.uid
        console.log(user)
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      } else {
        // Logged out
        dispatch(logout)
      } 
    })
    return unsubscribe;
  }, [])
  
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
      path: '/profile',
      element: <ProfileScreen />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
