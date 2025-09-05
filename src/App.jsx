import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Kurslar from './Components/Kurslar'
import Loyihalar from './Components/Loyihalar'
import Kod_manbasi from './Components/Kod_manbasi'
import Contact from './Components/Contact'
import JavaScript from './Components/Kurslar/JavaScript'
import TypeScript from './Components/Kurslar/TypeScript'
import Angular from './Components/Kurslar/Angular'
import React from './Components/Kurslar/React'
import Vue from './Components/Kurslar/Vue'
import Foundation from './Components/Kurslar/Foundation'
import Reacts from './Components/Kurslar/React'

function App() {

  return (
    <>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Kurslar />} />
        <Route path="/projects" element={<Loyihalar/>} />
        <Route path="/source-codes" element={<Kod_manbasi/>} />
        <Route path="/courses/foundation" element={<Foundation/>} />
        <Route path="/courses/js" element={<JavaScript/>} />
        <Route path="/courses/ts" element={<TypeScript/>} />
        <Route path="/courses/angular" element={<Angular/>} />
        <Route path="/courses/react" element={<Reacts/>} />
        <Route path="/courses/vue" element={<Vue/>} />
        <Route path="/contact" element={<Contact/> } />
      </Routes>
    </>
  )
}

export default App
