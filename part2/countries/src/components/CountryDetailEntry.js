const CountryDetailEntry = ({country}) => {
return (
        <>
            <h3>{country.name.common}</h3>
            capital {country.capital}
            <br/>
            area {country.area}
            <br/>
            <h4>Languages</h4>
            {
                Object.entries(country.languages).map(entry => {
                    return (
                        <li>
                            {entry[1]}
                        </li>
                    )
                })
            }
            <br/>
            <img src={country.flags.png}></img>
        </>
    )
}

export default CountryDetailEntry