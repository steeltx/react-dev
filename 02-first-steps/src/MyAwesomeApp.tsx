import type { CSSProperties } from "react";

const firstName = 'React';
const lastName = 'JS';
const favoriteGames = ['Juego 1', 'Juego 2'];
const isActive = true;
const address = {
    zipCode: 'abc',
    country: 'Canada'
}
const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10
};

export function MyAwesomeApp() {

    return (
        <>
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    )
}
