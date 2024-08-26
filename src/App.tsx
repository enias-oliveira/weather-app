import { useApp } from './use-app'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'
import { WeatherPanel } from './WeahterPanel'
import { useState } from 'react'

function App() {
    const {
        displayPanel,
        weatherPanelProps,
        handleClickCapitalListItem,
        handleOnSearch,
    } = useApp()

    return (
        <div className="h-dvh flex justify-center bg-gradient-to-b from-[#FF7F00] to-[#FFBB00]">
            <div>
                <div className="min-h-64 border-b-2 flex flex-col gap-4 justify-evenly items-center px-2 py-4">
                    <h1 className="font-bold text-white text-4xl pl-2">
                        Previsão do Tempo
                    </h1>

                    {displayPanel && weatherPanelProps ? (
                        <WeatherPanel
                            location={weatherPanelProps.location}
                            weather={weatherPanelProps.weather}
                            onClose={weatherPanelProps.onClose}
                        />
                    ) : null}

                    <SearchBar onSearch={handleOnSearch} />
                </div>

                <CapitalsList
                    handleClickOnCapital={handleClickCapitalListItem}
                />
            </div>
        </div>
    )
}

export default App
