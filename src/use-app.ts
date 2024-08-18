import { getCapitalsWeather } from "./api";

export const useApp = () => {
  const capitalsWeather = getCapitalsWeather();

  return { capitalsWeather };
};
