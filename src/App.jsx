import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Kurslar from './Components/Kurslar'
import Loyihalar from './Components/Loyihalar'
import Kod_manbasi from './Components/Kod_manbasi'
import Foundation from './Components/Kurslar/Foundation'

function App() {

  return (
    <>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Kurslar />} />
        <Route path="/projects" element={<Loyihalar/>} />
        <Route path="/source-codes" element={<Kod_manbasi/>} />
        <Route path="/courses/foundation" element={<Foundation/>} />
      </Routes>
    </>
  )
}

export default App
