import React from 'react'

export type WeatherPanelProps = {
    location: {
        city: string
    }
    weather: {
        temperature: number
    }
}

export const WeatherPanel = ({
    location: { city },
    weather: { temperature },
}: WeatherPanelProps) => {
    return (
        <div>
            <span>{city}</span>
            <span>{temperature}</span>
        </div>
    )
}
