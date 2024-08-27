import React, { FC } from 'react'
import { WeatherCurrentApiResponse } from './types'

type CapitalSelectionsProps = {
    handleClickOnCapital: (capital: string) => () => void
    list: {
        name: string
        temperature: number
    }[]
}

export const CapitalsList: FC<CapitalSelectionsProps> = ({
    handleClickOnCapital,
    list,
}) => {
    return (
        <div className="self-start pl-8">
            <h2 className="font-bold text-xl text-white pb-4">Capitais</h2>
            <ul className="space-y-2 md:grid md:grid-cols-3 md:gap-x-8 pb-4">
                {list.map((cpt) => (
                    <li
                        className="font-bold flex justify-start gap-4"
                        key={cpt.name}
                        onClick={handleClickOnCapital(cpt.name)}
                    >
                        <span className="min-w-10">{cpt.temperature}°</span>
                        <span>{cpt.name} </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
