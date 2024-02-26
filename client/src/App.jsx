import { useState } from 'react'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from "./components/Landing/Landing"
import Home from './components/Home/Home'
//style
import style from './App.module.css'
import Detail from './components/Detail/Detail'

function App() {
  

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element = {<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App
