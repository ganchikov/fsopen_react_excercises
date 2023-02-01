const CountryShortEntry = ({data, onCountryDetailsButtonClick}) => {
    const onButtonClick = (event) => {
        onCountryDetailsButtonClick(data)
    }

    return (
        <li>
            {data.name.common}<button onClick={onButtonClick}>details</button>
        </li>
    )
}

export default CountryShortEntry