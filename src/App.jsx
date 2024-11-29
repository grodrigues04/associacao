import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Contato from "./components/Contato"
import Associados from './components/Associados'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/contato" element={<Contato/>} />
        <Route path="/associados" element={<Associados/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
