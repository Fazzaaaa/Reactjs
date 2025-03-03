export default async function handler(req, res) {
    const city = 'Jakarta';
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Masukin API key langsung di sini
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        if (response.ok) {
            res.status(200).json(weatherData);
        } else {
            res.status(response.status).json(weatherData);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
