import { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('Jakarta');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        console.log("Fetching weather...");
        const res = await fetch(`/api/weather?city=${city}`);
        const data = await res.json();
        console.log(data);
        setWeather(data);
    };

    return (
        <div>
            <h1>Data Cuaca</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Masukkan nama kota"
            />
            <button onClick={fetchWeather}>Cari Cuaca</button>
            {weather && weather.main && weather.weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Suhu: {weather.main.temp}°C</p>
                    <p>Cuaca: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;