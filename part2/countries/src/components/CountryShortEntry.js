const CountryShortEntry = ({data, onCountryDetailsButtonClick}) => {
    const onButtonClick = (event) => {
        onCountryDetailsButtonClick(data)
    }

    return (
        <>
            {data.name.common}<button onClick={onButtonClick}>details</button>
        </>
    )
}

export default CountryShortEntry