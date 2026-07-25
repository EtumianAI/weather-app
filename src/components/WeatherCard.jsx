export default function WeatherCard({ weather, isLoading, error }) {
  if (isLoading) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        ⏳ Загружаем погоду...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
        ❌ {error}
      </p>
    );
  }

  if (!weather) {
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        Введите город и нажмите "Найти", чтобы увидеть погоду.
      </p>
    );
  }

  // Если всё хорошо, деструктуризируем данные для удобства
  const { name, main, weather: weatherInfo } = weather;
  const temp = Math.round(main.temp);
  const description = weatherInfo[0].description;
  const iconCode = weatherInfo[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}>{name}</h2>
      <img
        src={iconUrl}
        alt={description}
        style={{ width: "100px", height: "100px" }}
      />
      <p style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0" }}>
        {temp}°C
      </p>
      <p
        style={{ fontSize: "18px", color: "#555", textTransform: "capitalize" }}
      >
        {description}
      </p>
      <p style={{ fontSize: "14px", color: "#888" }}>
        Ощущается как: {Math.round(main.feels_like)}°C | Влажность:{" "}
        {main.humidity}%
      </p>
    </div>
  );
}