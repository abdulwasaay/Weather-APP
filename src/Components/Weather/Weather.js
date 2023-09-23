import "./Weather.css"

export default function Weather({ data }) {
    const weather = data;
    if (!weather) {
        return (
            <div className="not-found">
                <h1>Please select a city</h1>
            </div>
        )
    }

    if (weather.error) {
        return (
            <div className="not-found">
                <h1>{weather.error.message}</h1>
            </div>
        )
    }
    const imagePath = `http:${weather.current.condition.icon}`
    return (
        <div className="container">
            <div className="center">
                <img src={imagePath} alt="Weather pic" />
                <h2>{weather.current.temp_c}&deg;C</h2>
                <p>{weather.location.name},{weather.location.country}</p><br />
                <p>{weather.current.condition.text}</p>
            </div>
            <div className="image-container">
                <div>
                    <h3>{weather.current.wind_degree}&deg;</h3>
                    <img src="/wind.png" alt="Wind"/>
                    <p>Wind Flow</p>
                </div>
                <div>
                    <h3>{weather.current.cloud}</h3>
                    <img src="/cloud.jpeg" alt="Clouds"/>
                    <p>clouds</p>
                </div>
                <div>
                    <h3>{weather.current.humidity}</h3>
                    <img src="/humidity.png" alt="Humidity"/>
                    <p>Humidity</p>
                </div>
            </div>
        </div>
    )
}
