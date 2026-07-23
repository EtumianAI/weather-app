import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div style={{padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Прогноз погоды</h1>
      <Search />
      <WeatherCard />
    </div>
  );
}

export default App;