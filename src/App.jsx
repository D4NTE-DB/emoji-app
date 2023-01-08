import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import picHeader from './assets/image 3.png'
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [rnm, SetRnm] = useState({});
  const [searchId, SetSearchId] = useState("");
  const [isLoading, SetIsLoading] = useState(true);



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SetIsLoading(false);
    }, 3000);
    const randomId = Math.floor(Math.random() * 126) + 1; axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => {
        SetRnm(res.data)
        SetIsLoading(false)
        clearTimeout(timeoutId);
      })
    return () => {
      clearTimeout(timeoutId);
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  const SearchI = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`).then(res => SetRnm(res.data));
  }
  // console.log('rer')
  console.log(rnm.residents?.length)
  return (
    <div className="App">
      <header>
        <img src="/src/components/unnamed.ico" alt="" className='icon-header'/>
        <img src={picHeader} alt="header" className='main-header' />
        <div className="search">
          <input type="text"
            placeholder="Set Location between 1 - 126"
            value={searchId}
            onChange={e => SetSearchId(e.target.value)}

          />
          {/* <LoadingScreen /> */}

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
