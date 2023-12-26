import React, { useEffect } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import Deposit from './components/aeps/deposit/Deposit'

const App = () => {

 

  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/aeps-deposit' element={<Deposit/>} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App