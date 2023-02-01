import {useState, useEffect} from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'


const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({})
  const [weatherData, setWeatherData] = useState({})

  const onCountryChange = (event) => {
    setValue(event.target.value)
  }

  const onCountryDetailsButtonClick = (country) => {
    console.log(country)
    setSelectedCountry(country)
    getWeatherData(country)
  }

  const getWeatherData = (country) => {
    const lat = country.latlng[0]
    const lon = country.latlng[1]
    const apiKey = process.env.REACT_APP_API_KEY

    const weatherApiString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    axios.get(weatherApiString).then(response => {
        console.log(response.data)
        setWeatherData(response.data)
    })
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
        <CountriesList countryData={countries} 
          countryName={value} 
          selectedCountry={selectedCountry} 
          weatherData={weatherData}
          onCountryDetailsButtonClick={onCountryDetailsButtonClick}
        />
      </div>
    </>
  );
}

export default App;
