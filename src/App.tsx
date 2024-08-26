import { useApp } from './use-app'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'
import { WeatherPanel } from './WeahterPanel'

function App() {
    const { weatherPanelProps, handleClickCapitalListItem, handleOnSearch } =
        useApp()

    return (
        <div className="h-screen flex justify-center bg-gradient-to-b from-[#FF7F00] to-[#FFBB00]">
            <div>
                <h1 className="font-bold text-white text-4xl p-4">
                    Previsão do Tempo
                </h1>

                {weatherPanelProps ? (
                    <WeatherPanel
                        location={weatherPanelProps.location}
                        weather={weatherPanelProps.weather}
                    />
                ) : null}

                <SearchBar onSearch={handleOnSearch} />

                <CapitalsList
                    handleClickOnCapital={handleClickCapitalListItem}
                />
            </div>
        </div>
    )
}

export default App
