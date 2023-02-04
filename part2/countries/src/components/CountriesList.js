import CountryShortEntry from "./CountryShortEntry"
import CountryDetailEntry from "./CountryDetailEntry";
import WeatherDetails from "./WeatherDetails";

const CountriesList = ({countryData, countryName, weatherData, selectedCountry, onCountryDetailsButtonClick}) => {
    const filteredData = []
    countryData.forEach(element => {
        if (element.name.common.includes(countryName)) filteredData.push(element)    
    });
    
    if (filteredData.length > 10) return 'Too many entries'
    if (filteredData.length === 1) return (
        <>  
            <CountryDetailEntry country={filteredData[0]} weatherData={weatherData}/>
        </>
    )
    return (
        <>
            {
                filteredData.map((country, index) => {
                    if (country === selectedCountry && weatherData) {
                        return (
                            <>
                                <CountryDetailEntry key={`country_${index}`} 
                                                    country={selectedCountry} 
                                                    countryIndex={index}
                                                    weatherData={weatherData}/>                                  
                            </>
                        )
                    } else if (country === selectedCountry) {
                        return <CountryDetailEntry  key={`country_${index}`} 
                                                    country={selectedCountry} 
                                                    weatherData={weatherData}/>
                    }
                    return (
                        <li key={index}>
                            <CountryShortEntry data={country} onCountryDetailsButtonClick={onCountryDetailsButtonClick}
                            />
                        </li>
                    )
                })
            }
        </>
    )
}

export default CountriesList