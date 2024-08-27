import { WeatherCurrentApiResponse, WeatherForecastAPIResponse } from './types'
import { capitals, WEATHER_API_BASE_URL, WEATHER_API_KEY } from './utils'

export const getWeatherForecast = async (query: string) => {
    const response = await fetch(
        `${WEATHER_API_BASE_URL}/forecast.json?q=${query}&days=5&key=${WEATHER_API_KEY}&lang=PT`
    )
    return (await response.json()) as WeatherForecastAPIResponse
}

export const getWeatherCurrent = async (query: string) => {
    const response = await fetch(
        `${WEATHER_API_BASE_URL}/current.json?q=${query}&key=${WEATHER_API_KEY}&lang=PT`
    )
    return (await response.json()) as WeatherCurrentApiResponse
}

export const getCapitalsWeather = async () => {
    return Promise.all(capitals.map((capital) => getWeatherCurrent(capital)))
}
