
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Features from "./pages/Features";
import ResetPassword from './pages/Resetpassword.jsx'
import { supabase } from './lib/supabase.js'


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
         <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App