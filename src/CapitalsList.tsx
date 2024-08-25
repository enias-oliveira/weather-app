import React, { FC } from 'react'
import { Capital, capitals } from './utils'

type CapitalSelectionsProps = {
    handleClickOnCapital: (captial: Capital) => () => void
}

export const CapitalsList: FC<CapitalSelectionsProps> = ({
    handleClickOnCapital,
}) => {
    return (
        <div>
            <h2>Capitais</h2>
            <ul>
                {capitals.slice(0, 10).map((cpt) => (
                    <li key={cpt} onClick={handleClickOnCapital(cpt)}>
                        {cpt}
                    </li>
                ))}
            </ul>
        </div>
    )
}
