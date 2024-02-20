import { useState } from 'react'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from "./components/Landing/Landing"
//style
import style from './App.module.css'

function App() {
  

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App
