import WeatherDetails from "./WeatherDetails"
import LanguageEntry from "./LanguageEntry"

const CountryDetailEntry = ({country, countryIndex, weatherData}) => {
return (
        <>
            <h3>{country.name.common}</h3>
            capital {country.capital}
            <br/>
            area {country.area}
            <br/>
            <h4>Languages</h4>
            {
                Object.entries(country.languages).map((entry, index) => {
                    return (
                        <li key={`country_${countryIndex}_lang_${index}`}>
                            <LanguageEntry language={entry[1]}/>                            
                        </li>
                    )
                })
            }
            <br/>
            <img src={country.flags.png}></img>
            <WeatherDetails country={country} weatherData={weatherData}/>
        </>
    )
}

export default CountryDetailEntry