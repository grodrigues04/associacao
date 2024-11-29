import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Contato from "./components/Contato"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
