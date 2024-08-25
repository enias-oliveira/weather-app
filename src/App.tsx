import { useState } from 'react'
import { useApp } from './use-app'
import React from 'react'
import { CapitalsList } from './CapitalsList'
import { SearchBar } from './SearchBar'

function App() {
    const { selectedCapital, handleClickCapitalListItem, handleOnSearch } =
        useApp()

    return (
        <>
            <h1>Previsão do Tempo</h1>
            <h2>{selectedCapital}</h2>

            <SearchBar onSearch={handleOnSearch} />

            <CapitalsList handleClickOnCapital={handleClickCapitalListItem} />
        </>
    )
}

export default App
