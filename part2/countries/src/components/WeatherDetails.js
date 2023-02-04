const WeatherDetails = ({country, weatherData}) => {
    if (weatherData.current_weather) {
        // const imgUrl = `http://openweathermap.org/img/wn/${weatherData.current_weather.weathercode}d@2x.png`
        const imgUrl = `http://openweathermap.org/img/wn/01d@2x.png`
        return (
            <>
                <h1>Weather in {country.capital[0]}</h1>
                <br/>
                Temperature {weatherData.current_weather.temperature} Celsius
                <br/>
                <img src={imgUrl}></img>
                <br/>
                Wind {weatherData.current_weather.windspeed} m/s
            </>
        )
    }
    return (<></>)
}

export default WeatherDetails