import React from "react";
import { ResponseItem } from "./api";

export type WeatherPanelProps = {
  // TODO: Decouple from API
  capital?: ResponseItem;
};

export const WeatherPanel = ({ capital }: WeatherPanelProps) => {
  return (
    <div>
      <span>{capital?.location.city}</span>
      <span>{capital?.current_observation.condition.temperature}</span>
    </div>
  );
};
