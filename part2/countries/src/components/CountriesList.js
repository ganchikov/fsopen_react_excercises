import CountryShortEntry from "./CountryShortEntry"
import CountryDetailEntry from "./CountryDetailEntry";

const CountriesList = ({countryData, countryName}) => {
    const filteredData = []
    countryData.forEach(element => {
        if (element.name.common.includes(countryName)) filteredData.push(element)    
    });
    
    console.log(filteredData)
    // debugger
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
                    return (
                        <CountryShortEntry data={country}/>
                    )
                })
            }
        </>
    )
}

export default CountriesList