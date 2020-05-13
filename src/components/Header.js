import React from 'react'

export const Header = ({ pseudo }) => {
    const formatFrench = (pseudo) => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    return (
        <header>
            <h1>Les recettes { formatFrench(pseudo) }</h1>
        </header>
    )
}
