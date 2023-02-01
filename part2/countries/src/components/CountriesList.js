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
            <CountryDetailEntry country={filteredData[0]}/>
        </>
    )
    return (
        <>
            {
                filteredData.map(country => {
                    if (country === selectedCountry && weatherData) {
                        return (
                            <>
                                <CountryDetailEntry country={selectedCountry}></CountryDetailEntry>
                                <WeatherDetails country={selectedCountry} weatherData={weatherData}></WeatherDetails>
                            </>
                        )
                    } else if (country === selectedCountry) {
                        return <CountryDetailEntry country={selectedCountry}></CountryDetailEntry>
                    }
                    return (
                        <CountryShortEntry data={country} onCountryDetailsButtonClick={onCountryDetailsButtonClick}/>
                    )
                })
            }
        </>
    )
}

export default CountriesList