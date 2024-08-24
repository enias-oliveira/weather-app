import React, { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar: FC<{
    onSearch: (searchValue: string) => void
}> = ({ onSearch }) => {
    const [searchInputText, setSearchInputText] = useState('')

    const handleSearch = () => {
        onSearch(searchInputText)
        setSearchInputText('')
    }

    return (
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
    )
}
