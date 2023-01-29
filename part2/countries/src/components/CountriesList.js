import CountryShortEntry from "./CountryShortEntry"

const CountriesList = ({countryData, countryName}) => {
    const filteredData = []
    countryData.forEach(element => {
        if (element.name.common.includes(countryName)) filteredData.push(element)    
    });
    
    console.log(filteredData)
    if (filteredData.length > 10) return 'Too many entries'
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