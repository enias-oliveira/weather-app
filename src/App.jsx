import { useApp } from "./use-app";

function App() {
  const { capitalsWeather } = useApp();

  return (
    <>
      <ul>
        {capitalsWeather.map((cw) => (
          <li key={cw.location.city}>{cw.location.city}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
