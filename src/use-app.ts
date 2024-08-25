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
    const [selectedCapital, setSelectedCapital] = useState<Capital>()

    const { data: capitalWeather } = useQuery({
        queryKey: ['capitalWeather', selectedCapital],
        queryFn: async () => {
            const response = await fetch(
                `${WEATHER_API_BASE_URL}/forecast.json?q=${selectedCapital}&days=5&key=${WEATHER_API_KEY}`
            )
            return (await response.json()) as WeatherAPIResponse
        },
        enabled: !!selectedCapital,
    })

    const handleClickCapitalListItem = (capital: Capital) => () =>
        setSelectedCapital(capital)

    const handleOnSearch = (search: string) => {
        const searchRegex = new RegExp(search, 'i')

        const searchedCapital = capitals.find((capital) =>
            searchRegex.test(capital)
        )

        setSelectedCapital(searchedCapital)
    }

    const weatherPanelProps: WeatherPanelProps | undefined = capitalWeather
        ? {
              location: { city: capitalWeather.location.name },
              weather: {
                  temperature: capitalWeather.current.temp_c,
              },
          }
        : undefined

    return {
        weatherPanelProps,
        handleClickCapitalListItem,
        handleOnSearch,
    }
}
