import { useState } from 'react'
import { useApp } from './use-app'
import type { ResponseItem } from './api'
import React from 'react'
import { WeatherPanel } from './WeahterPanel'
import { CapitalsList } from './CapitalsList'
import { FaSearch } from 'react-icons/fa'

function App() {
    const { capitalsWeather } = useApp()

    const [searchInputText, setSearchInputText] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [selectedCapital, setSelectedCapital] = useState<ResponseItem>()

    const handleClickCapitalListItem = (cw: ResponseItem) => () =>
        setSelectedCapital(cw)

    const handleSearch = () => {
        setSelectedCapital(undefined)
        setSearchInputText('')
        setSearchValue(searchInputText)
    }

    const searchRegex = new RegExp(searchValue, 'g')

    const filteredCapital =
        selectedCapital ??
        capitalsWeather.find(({ location: { city } }) => searchRegex.test(city))

    return (
        <>
            <h1>Previsão do Tempo</h1>
            <WeatherPanel capital={filteredCapital} />

            <div>
                <input
                    type="text"
                    placeholder="Insira aqui o nome da cidade"
                    value={searchInputText}
                    onChange={(e) => setSearchInputText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                />
                <button onClick={handleSearch}>
                    <FaSearch />
                </button>
            </div>

            <CapitalsList
                capitals={capitalsWeather}
                handleClickOnCapital={handleClickCapitalListItem}
            />
        </>
    )
}

export default App
