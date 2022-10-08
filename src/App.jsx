import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Residents from './components/Residents'

function App() {

  const [location, setLocation] = useState({})//state
  const [typeId, setTypeId] = useState("")

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data))
  }, [])//axios petition

  const search = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}?name`)
      .then(res => setLocation(res.data))
  }



  //console.log(location)

  //VIZUALIZING....
  return (
    <div className="App">
      <div className='headingApp'>

      </div>

      <div className='container'>

        <h1>Rick and Morty wiki</h1>
        <div className='infoBox'>

          <input
            type="text"
            placeholder="type location's numer (1 - 126)"
            value={typeId}
            onChange={e => setTypeId(e.target.value)} />
          <button onClick={search}>buscar</button>

        </div>



        <div className='locationInfo'>
          <div className='textcenter'>
            <h2>{location.name}</h2>
          </div>
          <div className='locationRow'>
            <div className='col-sm-4-textcenter'><b>type: </b>{location.type}</div>
            <div className='col-sm-4-textcenter'><b>dimension :</b>{location.dimension}</div>
            <div className='col-sm-4-textcenter'><b>poputlation: </b>{location.residents?.length}</div>
          </div>
        </div>

        <h3>Residents </h3>

        <ul className='residentsContainer'>
          {
            location.residents?.map((resident) => (
              <li key={resident}>
                <Residents resident={resident} />
              </li>
            ))
          }
        </ul>
      </div>


    </div>
  )
}

export default App