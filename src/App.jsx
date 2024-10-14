import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='sign-in' element={<SignIn/>}  />
  <Route path='sign-up' element={<SignUp/>}  />
  <Route path='about' element={<About/>}  />
  <Route path='profile' element={<Profile/>}  />
</Routes>
</BrowserRouter>
  )
}
