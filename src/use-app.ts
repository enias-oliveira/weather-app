import { useState } from 'react'
import { Capital, capitals } from './utils'

export const useApp = () => {
    const [selectedCapital, setSelectedCapital] = useState<Capital>()

    const handleClickCapitalListItem = (capital: Capital) => () =>
        setSelectedCapital(capital)

    const handleOnSearch = (search: string) => {
        const searchRegex = new RegExp(search, 'i')

        const searchedCapital = capitals.find((capital) =>
            searchRegex.test(capital)
        )

        setSelectedCapital(searchedCapital)
    }

    return {
        capitals,
        selectedCapital,
        handleClickCapitalListItem,
        handleOnSearch,
    }
}
