import React, { FC } from 'react'
import { Capital, capitals } from './utils'

type CapitalSelectionsProps = {
    handleClickOnCapital: (captial: Capital) => () => void
}

export const CapitalsList: FC<CapitalSelectionsProps> = ({
    handleClickOnCapital,
}) => {
    return (
        <div className="p-2">
            <h2 className="font-bold text-2xl text-white">Capitais</h2>
            <ul className="grid grid-cols-2">
                {capitals.slice(0, 10).map((cpt) => (
                    <li key={cpt} onClick={handleClickOnCapital(cpt)}>
                        {cpt}
                    </li>
                ))}
            </ul>
        </div>
    )
}
