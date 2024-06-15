import React from 'react';
import Home from './Home/Home';

import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './Contactus/Contact';
import About from './About/About';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

import PaymentPage from './components/PaymentPage';
import Sucess from './components/Sucess';

function App() {
  const [authUser, setAuthUser]= useAuth()
  console.log(authUser);
  
  return(<>
      
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course"  element={authUser ? <Courses />: <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
      <Toaster />
      </div>
  </>)
}

export default App