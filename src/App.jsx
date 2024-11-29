import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />   
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
