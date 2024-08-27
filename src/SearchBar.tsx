import React, { FC } from 'react'
import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export const SearchBar: FC<{
    onSearch: (searchValue: string) => void
}> = ({ onSearch }) => {
    const [searchInputText, setSearchInputText] = useState('')

    const handleSearch = () => {
        onSearch(searchInputText)
        setSearchInputText('')
    }

    return (
        <div className="bg-white flex items-center justify-between px-3 py-2 w-full">
            <input
                className="w-full focus:outline-none"
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
                <IoSearchOutline className="text-2xl" />
            </button>
        </div>
    )
}
