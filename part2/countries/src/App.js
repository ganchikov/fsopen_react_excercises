import {useState, useEffect} from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'


const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  const onCountryChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => response.data).then(data => {
      setCountries(data)
    })
  }, [])

  return (
    <>
      <div>
        find countries <input onChange={onCountryChange} value={value}/>
      </div>
      <div>
        <CountriesList countryData={countries} countryName={value}/>
      </div>
    </>
  );
}

export default App;
