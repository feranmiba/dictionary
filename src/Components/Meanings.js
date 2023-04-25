import React, { useEffect, useState } from 'react'
import { FaMicrophone, FaBookOpen } from 'react-icons/fa'
import { apiUrl } from './utils/FetchfromAPI'


function Meanings(props) {
  const name = props.wordChosen

  const [wordsMeaning, setWordsMeaning] = useState([])
  const [loading, isLoading] = useState(false)

   useEffect(() => {
        const fetchCountryData = async () => {
          try { 
                const response = await fetch(`${apiUrl}/${name}`)
                isLoading(true)
                const data = await response.json();
                  isLoading(false)
                setWordsMeaning(data);

        } catch (error) {
            console.log(error)
        }
    };
    fetchCountryData()
           
    }, [name])


 useEffect(() => {
        document.title = `Countries | ${name}`
    }, [name])
const le = wordsMeaning
    
    wordsMeaning.map((item) => (
      console.log(item.meanings)
    ))
  return (
    <div>
      {loading && <p>loading......please wait</p>}
     { wordsMeaning.map((item)=> (
      <div className='means' key={item.id}>
       <div> <h1>{item.word}</h1> <FaMicrophone /> </div>
       <p><b>{item.phonetics[0].text}</b></p>

       
      { item.meanings.map((define, idex ) => 
      <div className='ning'>
       <div><h4>Meaning <FaBookOpen /> </h4></div>
       <summary >
           <li key={idex}>{define.definitions[0].definition}</li>   
       </summary>

       <div className='elect'>
       <summary>
        <p><strong>Synonyms</strong> - {define.synonyms[1]}</p> 
        <p><strong>Parts Of speech</strong> - {define.partOfSpeech}</p>
        <p><strong>Example</strong> - {define.definitions[0].example}</p>
       </summary>
       </div>
       </div>
       )}
        </div>)
)}
    </div>
  )
}

export default Meanings