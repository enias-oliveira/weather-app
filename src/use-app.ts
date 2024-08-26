import { useState } from 'react'
import {
    Capital,
    capitals,
    WEATHER_API_BASE_URL,
    WEATHER_API_KEY,
} from './utils'
import { useQuery } from '@tanstack/react-query'
import { WeatherAPIResponse } from './types'
import { WeatherPanelProps } from './WeahterPanel'

export const useApp = () => {
    const [locationQuery, setLocationQuery] = useState('')

    const { data: capitalWeather } = useQuery({
        queryKey: ['capitalWeather', locationQuery],
        queryFn: async () => {
            const response = await fetch(
                `${WEATHER_API_BASE_URL}/forecast.json?q=${locationQuery}&days=5&key=${WEATHER_API_KEY}&lang=PT`
            )
            return (await response.json()) as WeatherAPIResponse
        },
        enabled: !!locationQuery,
    })

    const handleClickCapitalListItem = (capital: Capital) => () =>
        setLocationQuery(capital)

    const handleOnSearch = (search: string) => {
        setLocationQuery(search)
    }

    const weatherPanelProps: WeatherPanelProps | undefined = capitalWeather
        ? {
              location: {
                  city: capitalWeather.location.name,
                  country: capitalWeather.location.country,
                  state: capitalWeather.location.region,
              },
              weather: {
                  temperature: capitalWeather.current.temp_c,
                  condition: capitalWeather.current.condition.text,
                  minTemperature:
                      capitalWeather.forecast.forecastday[0].day.mintemp_c,
                  maxTemperature:
                      capitalWeather.forecast.forecastday[0].day.maxtemp_c,
                  feelsLike: capitalWeather.current.feelslike_c,
                  humidity: capitalWeather.current.humidity,
                  windSpeed: capitalWeather.current.wind_kph,
              },
          }
        : undefined

    return {
        weatherPanelProps,
        handleClickCapitalListItem,
        handleOnSearch,
    }
}
