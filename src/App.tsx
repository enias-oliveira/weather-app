import { useState } from 'react'
import { useApp } from './use-app'
import React from 'react'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'
import { WeatherPanel } from './WeahterPanel'

function App() {
    const { weatherPanelProps, handleClickCapitalListItem, handleOnSearch } =
        useApp()

    return (
        <>
            <h1>Previsão do Tempo</h1>

            {weatherPanelProps ? (
                <WeatherPanel
                    location={weatherPanelProps.location}
                    weather={weatherPanelProps.weather}
                />
            ) : null}

            <SearchBar onSearch={handleOnSearch} />

            <CapitalsList handleClickOnCapital={handleClickCapitalListItem} />
        </>
    )
}

export default App
