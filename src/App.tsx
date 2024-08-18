import { useState } from "react";
import { useApp } from "./use-app";
import type { ResponseItem } from "./api";
import React from "react";

function App() {
  const { capitalsWeather } = useApp();

  const [selectedCapital, setSelectedCapital] = useState<ResponseItem>();

  const handleClickCapitalListItem = (cw: ResponseItem) => () =>
    setSelectedCapital(cw);

  return (
    <>
      <div>
        <span>{selectedCapital?.location.city}</span>
        <span>
          {selectedCapital?.current_observation.condition.temperature}
        </span>
      </div>
      <ul>
        {capitalsWeather.map((cw) => (
          <li key={cw.location.city} onClick={handleClickCapitalListItem(cw)}>
            {cw.location.city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
