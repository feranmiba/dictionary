import React from 'react'
import { Link } from 'react-router-dom'
import { FaLightbulb } from 'react-icons/fa'

function Welcome() {
  return (
    <div className='nav'>
      <div  className='welcome'>
      <h1>ATIMA DICTIONARY <FaLightbulb /></h1>
        <p>Explore More Words</p>
       <Link to='/sidebar'> <button>Start</button> </Link> 
      </div>
    </div>
  )
}

export default Welcome