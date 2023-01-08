import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import Picmain from './assets/image 3.png'

function App() {
  const [rnm, SetRnm] = useState({});
  const [searchId, SetSearchId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1; axios.get(`https://rickandmortyapi.com/api/location/${randomId}`).then((res) => SetRnm(res.data))
  }, [])

  const SearchI = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`).then(res => SetRnm(res.data));
  }
  // console.log('rer')
  console.log(rnm.residents?.length)
  return (
    <div className="App">
      <header>
        <img src={Picmain} alt="header" />
        <div className="search">
        <input type="text"
          placeholder="Set Location between 1 - 126"
          value={searchId}
          onChange={e => SetSearchId(e.target.value)}
        />
        <button onClick={SearchI} >Search</button>
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


    </div>
  )
}

export default App
