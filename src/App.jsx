import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError("");
    setWeather(null);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`Город не найден`);
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="main"
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🌤️ Прогноз погоды</h1>
      <Search onSearch={handleSearch} />
      <WeatherCard weather={weather} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
