import React from 'react'
import Meanings from './Meanings'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { apiUrl } from './utils/FetchfromAPI'




function Sidebar() {
  const [word, SetWords] = useState('')
  const [ Meaning, setMeanings] = useState([])
  const [mean, setMean] = useState(word)
  const saved = mean
  const handleChange = (e) => {
    console.log(e.target.value)
    SetWords(e.target.value)
  }
  const takeWord = (e) => {
    setMean(word)
  }
  const fetchWordData = async () => {
    try {
      const res = await fetch(`${apiUrl}/lovely`)
      const data = await res.json()
      // console.log(data)
      setMeanings(data)

    } catch (error) {
      console.log(error)

    }
  }
  
 useEffect(() => {
  fetchWordData()
}, [])




  return (
    <div className='spilt'>
      <div className='sear' onChange={handleChange} value={word}>
      <p className='theinput'><FaSearch /><input 
      type="text" placeholder='Search for a word' /></p>

<div className='search'>
            <div className='simi'>
                <p
                onClick={takeWord}
                >{word}</p>
            </div>
      </div>
        </div>



        <div>
        <Meanings
        setMeanings= {Meaning}
        wordChosen= {mean}
         />
        </div>
    </div>
  )
}

export default Sidebar