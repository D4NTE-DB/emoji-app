import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import picHeader from './assets/image 3.png'
import LoadingScreen from './components/LoadingScreen';
import unnamed from './components/unnamed.ico'

function App() {
  const [rnm, SetRnm] = useState({});
  const [searchId, SetSearchId] = useState("");
  const [isLoading, SetIsLoading] = useState(true);
  const [ locationsSuggestions, setLocationsSuggestions] = useState([]);



  useEffect(() => {
   
    const randomId = Math.floor(Math.random() * 126) + 1; axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => {
        SetRnm(res.data)
        setTimeout(() => SetIsLoading(false), 2000 )
      })
  
  }, [])

  useEffect(() => {
    if(searchId){
      axios.get(`https://rickandmortyapi.com/api/location?name=${searchId}`)
        .then(res => setLocationsSuggestions(res.data.results));
    } else setLocationsSuggestions([]);
  }, [searchId])

  console.log(locationsSuggestions)

  const SearchI = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`).then(res => SetRnm(res.data));
  }
  // console.log('rer')
  // console.log(rnm.residents?.length)

  const selectSuggestion = suggestion => {
    SetRnm(suggestion);
    SetSearchId("");
  }
  return (
    <div className="App">
      
      {
        isLoading ? (
          
          <img className='rick-icon' id='rick' src={unnamed} alt="" />
         
       ):(
        <>
      {/* <LoadingScreen /> */}
      <header>
        {/* <img src='' alt="" className='icon-header'/> */}
        <img src={picHeader} alt="header" className='main-header' />
        <div className="search">
          <input type="text"
            placeholder="Set a Location"
            value={searchId}
            onChange={e => SetSearchId(e.target.value)}

          />
          {/* <LoadingScreen /> */}

          <button onClick={SearchI} >Search</button>
          <ul className="suggestions-list">
          {locationsSuggestions.map(suggestion => (
            <h5 onClick={() => selectSuggestion(suggestion)}>{suggestion.name}</h5>
          ))}
        </ul>
        </div>
        

      </header>
      <div className="info-header" >
        <div>
          <h2>Nombre: </h2>
          <h2>{rnm.name}</h2>
        </div>
        <div>
          <h2>Tipo: </h2>
          <h2>{rnm.type}</h2>
        </div>
        <div>
          <h2>Dimension: </h2>
          <h2>{rnm.dimension}</h2>
        </div>
        <div>
          <h2>Poblacion: </h2>
          <h2>{rnm.residents?.length}</h2>
        </div>
      </div>

      <div className="resident-card">
        {rnm.residents?.map(resident => (
          <CharacterCard
            url={resident}
            key={resident} />
        ))}
      </div>
      </>
       )
      }

    </div>
  )
}

export default App
