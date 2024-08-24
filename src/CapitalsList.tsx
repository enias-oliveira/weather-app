import React, { FC } from 'react'
import { ResponseItem } from './api'

type CapitalSelectionsProps = {
    capitals?: ResponseItem[]
    handleClickOnCapital: (captial: ResponseItem) => () => void
}

export const CapitalsList: FC<CapitalSelectionsProps> = ({
    capitals,
    handleClickOnCapital,
}) => {
    return (
        <div>
            <h2>Capitais</h2>
            <ul>
                {capitals?.map((cpt) => (
                    <li
                        key={cpt.location.city}
                        onClick={handleClickOnCapital(cpt)}
                    >
                        {cpt.location.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}
