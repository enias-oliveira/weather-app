import { useApp } from './use-app'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'
import { WeatherPanel } from './WeahterPanel'

function App() {
    const {
        displayPanel,
        weatherPanelProps,
        capitalListProps,
        handleOnSearch,
    } = useApp()

    return (
        <div className="h-[100%]  bg-gradient-to-b from-[#FF7F00] to-[#FFBB00]">
            <div className="flex flex-col items-center">
                <div className="min-h-64 flex flex-col gap-4 justify-evenly items-center">
                    <h1 className="font-bold text-white text-xl pt-4 pl-4 self-start">
                        Previsão do Tempo
                    </h1>

                    {displayPanel && weatherPanelProps ? (
                        <WeatherPanel
                            location={weatherPanelProps.location}
                            weather={weatherPanelProps.weather}
                            onClose={weatherPanelProps.onClose}
                        />
                    ) : null}

                    <div className="min-w-60">
                        <SearchBar onSearch={handleOnSearch} />
                    </div>
                </div>
                <div className="h-0.5 w-full max-w-sm bg-white my-4"></div>

                {capitalListProps ? (
                    <CapitalsList
                        handleClickOnCapital={
                            capitalListProps.handleClickCapitalListItem
                        }
                        list={capitalListProps.capitalsWeather}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default App
