import { useState } from 'react'
import { useApp } from './use-app'
import type { ResponseItem } from './api'
import React from 'react'
import { WeatherPanel } from './WeahterPanel'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'
import { useEffect } from 'react'

function App() {
    const { capitalsWeather } = useApp()

    const [searchValue, setSearchValue] = useState('')
    const [selectedCapital, setSelectedCapital] = useState<ResponseItem>()

    const handleClickCapitalListItem = (cw: ResponseItem) => () =>
        setSelectedCapital(cw)

    useEffect(() => {
        if (searchValue) {
            const searchRegex = new RegExp(searchValue, 'i')

            const searchedCapital = capitalsWeather.find(
                ({ location: { city } }) => searchRegex.test(city)
            )

            setSelectedCapital(searchedCapital)
        }
    }, [searchValue])

    return (
        <>
            <h1>Previsão do Tempo</h1>
            <WeatherPanel capital={selectedCapital} />

            <SearchBar
                onSearch={(searchValue) => setSearchValue(searchValue)}
            />

            <CapitalsList
                capitals={capitalsWeather}
                handleClickOnCapital={handleClickCapitalListItem}
            />
        </>
    )
}

export default App
