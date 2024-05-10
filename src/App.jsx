import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login/Login'
import GetProperty from './Component/PropertyDetails/GetProperty'
import {address , abi} from './constant/value'
import { ethers } from 'ethers'
import AddNominee from './Component/AddNominee/addNominee'
import Change_status from './Component/ChangeStatus/change_status'
import OwnProperty from './Component/OwnProperty/OwnProperty'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../src/ui/hero_highlights";
import { BackgroundBeams } from './ui/backGroundBeams'
import { SparklesPreview } from './ui_test/sparklesPreview'
import { SparklesCore } from './ui/spakels'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
function App() {

  // <h1 className='text-3xl font-bold underline'>hello</h1>
  // <AddNominee/>
  // <OwnProperty/>
  // <GetProperty/>
  return (
    <Router>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/addNominee' element={<AddNominee/>}/>
        <Route path='/getProperty' element={<GetProperty/>}/>
        <Route path='/changeStaus' element={<Change_status/>}/>
        
      </Routes>
    </Router>
  
    
  )
  
}

export default App
