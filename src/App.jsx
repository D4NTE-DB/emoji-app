import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import Emoji from './components/Characters';
import CharacterCard from './components/CharacterCard';
import Picmain from './assets/image 3.png'

function App() {
  //  const [countrylist, setCountryList] = useState([]);
  const [pokemonType, SetPokemonType] = useState({});
  const [rnm, SetRnm] = useState({});
  const [searchId, SetSearchId] = useState("");
  const [character, SetCharacter] = useState({});




  //   useEffect( () =>{
  //       axios.get(`http://pokeapi.co/api/v2/type/9/`).then((res)=> SetPokemonType(res.data))
  // }, [])


  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1; axios.get(`https://rickandmortyapi.com/api/location/32`).then((res) => SetRnm(res.data))
  }, [])

  const SearchI = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`).then(res => SetRnm(res.data));
  }


  return (
    <div className="App">
      <header>
        <img src={Picmain} alt="header" />
        <div className="search">
        <input type="text"
          placeholder="Set Location"
          value={searchId}
          onChange={e => SetSearchId(e.target.value)}
        />
        <button onClick={SearchI} >Search location</button>
        </div>
       
      </header>
      <div className="info-header">
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
          <h2>{rnm.dimension}</h2>
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
