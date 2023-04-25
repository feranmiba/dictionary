import React from 'react'
import { useState } from 'react'
import { FaMoon, FaSun, FaBook } from 'react-icons/fa'
import Welcome from './Welcome'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'

function Navbar() {
  const [mode, setMode] = useState(true)
  const change = () => {
    document.body.classList.toggle('dark')
   setMode(!mode)
  }

  return (
    <div>
        <div className='navbar'>
            <h2>Atima schs <FaBook /></h2>
            <p> <button>History</button>  |<span
            onClick={change}
            >{ 
              mode ? (
              <button>Dark Mode <FaMoon /></button>
              ) : (
                <button>Light Mode <FaSun /> </button>
              )
            }
              </span> </p>
        </div>
        <div>
          <Routes>
            <Route path='/' element={ <Welcome /> } /> 
            <Route path='/sidebar' element={ <Sidebar /> } /> 
          </Routes>
        </div>
    </div>
  )
}

export default Navbar