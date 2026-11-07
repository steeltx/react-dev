import { heroes, type Hero, type Owner } from "../data/herores.data"

const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id
    });
    return hero;
}

//console.log(getHeroById(1));

export const getHeroesByOwner = (owner: Owner) => {
    const heroresByOwner = heroes.filter(
        hero => hero.owner === owner
    )
    return heroresByOwner;
}
