import { useState } from 'react'
import { useApp } from './use-app'
import type { ResponseItem } from './api'
import React from 'react'
import { WeatherPanel } from './WeahterPanel'
import { CapitalsList } from './CapitalsList'

function App() {
    const { capitalsWeather } = useApp()

    const [selectedCapital, setSelectedCapital] = useState<ResponseItem>()

    const handleClickCapitalListItem = (cw: ResponseItem) => () =>
        setSelectedCapital(cw)

    return (
        <>
            <h1>Previsão do Tempo</h1>
            <WeatherPanel capital={selectedCapital} />
            <CapitalsList
                capitals={capitalsWeather}
                handleClickOnCapital={handleClickCapitalListItem}
            />
        </>
    )
}

export default App
