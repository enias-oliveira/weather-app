import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { WeatherForecastAPIResponse } from './types'
import { Capital, WEATHER_API_BASE_URL, WEATHER_API_KEY } from './utils'
import { WeatherPanelProps } from './WeahterPanel'
import { getCapitalsWeather, getWeatherForecast } from './api'

export const useApp = () => {
    const [locationQuery, setLocationQuery] = useState('')
    const [displayPanel, setDisplayPanel] = useState(false)

    const { data: selectedWeatherForecast } = useQuery({
        queryKey: ['weatherForecast', locationQuery],
        queryFn: async () => getWeatherForecast(locationQuery),
        enabled: !!locationQuery,
    })

    const { data: capitalsCurrentWeathers } = useQuery({
        queryKey: ['capitalsCurrentWeather'],
        queryFn: async () => getCapitalsWeather(),
    })

    const handleClickCapitalListItem = (capital: string) => () => {
        setLocationQuery(capital)
        setDisplayPanel(true)
    }

    const handleOnSearch = (search: string) => {
        setLocationQuery(search)
        setDisplayPanel(true)
    }

    const handleOnClose = () => {
        setDisplayPanel(false)
    }

    const weatherPanelProps: WeatherPanelProps | undefined =
        selectedWeatherForecast
            ? {
                  onClose: handleOnClose,
                  location: {
                      city: selectedWeatherForecast.location.name,
                      country: selectedWeatherForecast.location.country,
                      state: selectedWeatherForecast.location.region,
                  },
                  weather: {
                      temperature: selectedWeatherForecast.current.temp_c,
                      condition: selectedWeatherForecast.current.condition.text,
                      minTemperature:
                          selectedWeatherForecast.forecast.forecastday[0].day
                              .mintemp_c,
                      maxTemperature:
                          selectedWeatherForecast.forecast.forecastday[0].day
                              .maxtemp_c,
                      feelsLike: selectedWeatherForecast.current.feelslike_c,
                      humidity: selectedWeatherForecast.current.humidity,
                      windSpeed: selectedWeatherForecast.current.wind_kph,
                  },
              }
            : undefined

    const capitalListProps = capitalsCurrentWeathers
        ? {
              handleClickCapitalListItem,
              capitalsWeather: capitalsCurrentWeathers.map((ccw) => ({
                  name: ccw.location.name,
                  temperature: ccw.current.temp_c,
              })),
          }
        : undefined

    return {
        displayPanel,
        handleOnSearch,
        weatherPanelProps,
        capitalListProps,
    }
}
